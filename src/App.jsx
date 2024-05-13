import './App.css'
import { useState } from 'react';
import MiApi from './components/MiApi'

function App() {

  const [search, setSearch] = useState("");

  return (
    <>
      <h1>Bienvenido a la Landing Page de Dragon Ball</h1>
      <div className='contInput'>
        <input className='entrada'
          type="text"
          placeholder="Busque un nombre"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <MiApi search = {search} /> 
      
    </>
  )
}
export default App
