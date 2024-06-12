import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Imagen from "./Imagen"
import Tag from "./Tags"
import Cargando from "../Cargando"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

const GaleriaContainer = styled.div`
display: flex;
gap: 24px;
`

const SeccionFluida = styled.section`
flex-grow: 1;
`
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`


const Galeria = () => {

    // const { fotosDeGaleria, consulta, alAlternarFavorito, setFotoSeleccionada } = useContext(GlobalContext)
    const { state} = useContext(GlobalContext)
    
    // const [tagSeleccionado, setTagSeleccionado] = useState(null);

    // const fotosFiltradas = tagSeleccionado
    //   ? fotos.filter((foto) => foto.tagId === tagSeleccionado)
    //   : fotos;

    return (
        state.fotosDeGaleria.length == 0 ?
        <Cargando></Cargando>:
        <>
            <Tag/>

            <GaleriaContainer>

                <SeccionFluida>

                    <Titulo>Navegue por la galería</Titulo>
                    <ImagenesContainer>
                        {state.fotosDeGaleria.filter( foto => {
                            return state.consulta == '' || foto.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").includes(state.consulta.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""))
                        })
                        .map(foto => 
                        <Imagen
                            key={foto.id}
                            foto={foto} 
                        />)
                        }
                    </ImagenesContainer>

                </SeccionFluida>

                <Populares/>

            </GaleriaContainer>
        </>
    )
}

export default Galeria