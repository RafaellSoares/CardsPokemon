import { useState, useEffect } from 'react'
import PokeCards from './components/PokeCards'
import api from './services/api'

function App() {
  const [pokemons, setPokemons] = useState([])


  const getPokemons = async () => {
    const listPokemons = await api
                                .get("121")
                                .then(response => response.data)
                                .catch(err => console.log(err))
                               
    console.log(listPokemons) 
    setPokemons([...pokemons, listPokemons])                           
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <div className="App">
      <PokeCards pokemon={pokemons[0]} />
    </div>
  )
}

export default App
