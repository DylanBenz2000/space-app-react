import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Imagen from "./Imagen"
import Tag from "./Tags"
import { useState } from "react"

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


const Galeria = ({ fotos = [], alSeleccionarFoto, alAlternarFavorito, terminoBusqueda  }) => {

    const [tagSeleccionado, setTagSeleccionado] = useState(null);

    // const fotosFiltradas = fotos.filter(foto => {
    //     return (
    //       (tagSeleccionado === null || foto.tagId === tagSeleccionado) &&
    //       (terminoBusqueda === "" || foto.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase()))
    //     );
    //   });
    

    const fotosFiltradasPorTag = tagSeleccionado
      ? fotos.filter((foto) => foto.tagId === tagSeleccionado)
      : fotos;

      const fotosFiltradas = fotosFiltradasPorTag.filter(foto =>
        terminoBusqueda === "" || foto.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase())
      );

  
    return (
        <>
            <Tag onTagSelect={setTagSeleccionado} />

            <GaleriaContainer>

                <SeccionFluida>

                    <Titulo>Navegue por la galería</Titulo>
                    <ImagenesContainer>
                        {fotosFiltradas.map(foto => 
                        <Imagen
                            alAlternarFavorito ={alAlternarFavorito}
                            alSolicitarZoom={alSeleccionarFoto}
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