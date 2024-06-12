import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

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
    const {setConsulta} = useContext(GlobalContext)

    return(
        <>
            <HeaderEstilizado>
                <img className="logo" src="img/logo.png" alt="logo de space app" />
                <CampoTexto setConsulta={setConsulta} />
                {/* <CampoTexto onChange={(e) => onSearch(e.target.value)}/> */}
            </HeaderEstilizado>
        </>
    )
}

export default Cabecera