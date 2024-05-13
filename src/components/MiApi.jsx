import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const MiApi = ({ search }) => {

  const [personajeApi, setPersonajeApi] = useState([]);
  const URL = "https://dragonball-api.com/api/characters";

  const traerPersonajes = async () => {
    try {
      const data = await fetch(URL);
      const result = await data.json();
      const personajes = result.items;
      setPersonajeApi(personajes);
    } catch (error) {
      alert("No trae los datos");
    }
  };

  useEffect(() => {traerPersonajes()}, []);

  let personajesAmostrar = [];

  if (search === "") {
    personajesAmostrar = personajeApi;
  } else {
    // eslint-disable-next-line react/prop-types
    personajesAmostrar = personajeApi.filter((personaje) =>
      // eslint-disable-next-line react/prop-types
      personaje.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  // Arreglo ordenado alfabeticamente
  personajesAmostrar.sort((a,b)=>{
    const nombreA=a.name.toLowerCase()
    const nombreB=b.name.toLowerCase()
    if(nombreA<nombreB)
      {return -1}  
    if(nombreA>nombreB){
      return 1
    }
    return 0
  })
  return (
    <>
      <div className="contenedor">
        {personajesAmostrar.map((personaje) => (
          <>
            <div className="boxAtributos" key={personaje.id}>
              <img className="imgPer" src={personaje.image} alt={personaje.name}/>
              <p className="pLetra">
                {`${personaje.name}: ${personaje.description} Raza: ${personaje.race}`} 
              </p>
            </div>
          </>
          ))
        }
        {personajesAmostrar.lenght == 0 ? (<p>No se encontraron resultados</p>) : ("")}
      </div>
    </>
  )
}
export default MiApi



