import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./components/Galeria";
import fotos from "./fotos.json"
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Pie from "./components/Pie";


const FondoGradiente = styled.div`
  background-image: linear-gradient(175deg, #041833 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width:1280px;
  max-width: 100%;
  margin: 0 auto;
`;
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;
const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  /* El flex-grow al 1 es muy necesario
        ya que si no se pone la imagen no ocupa todo
        el espacio disponible que tiene
     */
  flex-grow: 1;
`;

const App = () => {

  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const alAlternarFavorito = (foto) =>{

    if(foto.id === fotoSeleccionada?.id){
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !foto.favorita
      })
    }

    setFotosDeGaleria(fotosDeGaleria.map(fotoDeLaGaleria =>{
      return {
        ...fotoDeLaGaleria,
        favorita: fotoDeLaGaleria.id === foto.id ? !foto.favorita : fotoDeLaGaleria.favorita 
      }
    }))
  }




  return (
    <>
    <FondoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Cabecera onSearch={setTerminoBusqueda} />
        <MainContainer>
          <BarraLateral />
          <ContenidoGaleria>
            <Banner
              texto="La galería más completa de fotos del espacio"
              backgroundImage={banner}
            />
            <Galeria 
              alSeleccionarFoto={foto =>setFotoSeleccionada(foto)} 
              fotos={fotosDeGaleria} 
              alAlternarFavorito={alAlternarFavorito}
              terminoBusqueda={terminoBusqueda}
            />
          </ContenidoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom alAlternarFavorito={alAlternarFavorito} foto={fotoSeleccionada} alCerrar={ () => {
        setFotoSeleccionada(null);
      }}/>
      <Pie />
    </FondoGradiente>

    </>



  );
}

export default App;
