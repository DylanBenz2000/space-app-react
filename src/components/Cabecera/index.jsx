import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
        width: 212px;
    }
`

const Cabecera = () => {
    return(
        <>
            <HeaderEstilizado>
                <img className="logo" src="img/logo.png" alt="logo de space app" />
                <CampoTexto />
            </HeaderEstilizado>
        </>
    )
}

export default Cabecera