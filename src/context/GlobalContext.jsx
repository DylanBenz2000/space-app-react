import { createContext } from "react";
import { useState, useEffect } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
    const [consulta, setConsulta] = useState('')
    const [fotosDeGaleria, setFotosDeGaleria] = useState([]);
    const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

    useEffect(() => {
        const getData = async () => {
          const response = await fetch('http://localhost:3000/fotos');
          const data = await response.json();
          setFotosDeGaleria([...data]); //Con el spread operator creamos un nuevo arreglo
        };
        setTimeout( () => getData(), 5000);
      }, [])

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

    return(
        <GlobalContext.Provider value={{ 
            consulta, 
            setConsulta, 
            fotosDeGaleria, 
            fotoSeleccionada, 
            setFotoSeleccionada,
            alAlternarFavorito
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;