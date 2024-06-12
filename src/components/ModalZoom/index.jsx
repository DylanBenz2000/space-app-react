import styled from "styled-components"
import Imagen from "../Galeria/Imagen"
import BotonIcono from "../BotonIcono"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

const Overlay = styled.div`
    background-color: rgba(0,0,0,.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    left: 10%;
    background-color: transparent;
    width: 800px;
    border: none;
`

const IconoCerrar = styled.img`
    position:absolute;
    top: 45px;
    right: 128px;
`




const ModalZoom = () =>{

    const { fotoSeleccionada, alAlternarFavorito, setFotoSeleccionada } = useContext(GlobalContext)

    return(
        <>
            {
            fotoSeleccionada && 
                <>
                    <Overlay />
                    <DialogEstilizado open={!!fotoSeleccionada} onClose={ () => setFotoSeleccionada(null)}>
                        <Imagen foto={fotoSeleccionada} expandida={true} alAlternarFavorito={alAlternarFavorito}/>
                            <form method="dialog">
                                <BotonIcono formMethod="dialog">
                                    <IconoCerrar src="/iconos/cerrar.png" alt="Icono de cerrar" />
                                </BotonIcono>
                            </form>
                    </DialogEstilizado> 
                </>
            }

        </>

    )


}

export default ModalZoom