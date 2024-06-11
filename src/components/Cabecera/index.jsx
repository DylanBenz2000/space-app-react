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

const Cabecera = ({ onSearch }) => {
    return(
        <>
            <HeaderEstilizado>
                <img className="logo" src="img/logo.png" alt="logo de space app" />
                <CampoTexto onChange={(e) => onSearch(e.target.value)}/>
            </HeaderEstilizado>
        </>
    )
}

export default Cabecera