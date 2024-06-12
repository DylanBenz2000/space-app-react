import { useContext, useRef } from "react";
import styled from "styled-components"
import search from './search.png'
import { GlobalContext } from "../../context/GlobalContext";



const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const IconoLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 35px;
    height: 35px;
    cursor: pointer;
`;

const CampoTexto = ( ) => {

    const cajaConsulta = useRef(null)
    const { dispatch } = useContext(GlobalContext);

    return(
    <ContainerEstilizado>
        <CampoTextoEstilizado ref={cajaConsulta} type="text" placeholder="Buscar una foto" />
        <IconoLupa src={search} alt="ícono de lupa" onClick={ () => {
            dispatch({ type: 'SET_CONSULTA', payload: cajaConsulta.current.value })
        }}/>
    </ContainerEstilizado>
    )
}


export default CampoTexto