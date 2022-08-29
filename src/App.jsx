import { useState, useEffect } from 'react'
import PokeCards from './components/PokeCards'
import api from './services/api'

function App() {
  const [pokemons, setPokemons] = useState([])


  const getPokemons = async (total) => {
    const listPokemons = []

    for(let i = 1; i <= total; i++) {
      const newPokemon = await api
        .get(`${i.toString()}`)
        .then(response => response.data)
        .catch(err => console.log(err))


      listPokemons.push(newPokemon)  
    }

    setPokemons([...pokemons, ...listPokemons])

    console.log(pokemons)  
  }

  useEffect(() => {
    getPokemons(50)
  }, [])

  return (
    <div className="App container">
      <h1>Pokemons Primeira Geração</h1>
      <div className="cards">
        {pokemons?.map(poke => {
          return <PokeCards pokemon={poke} />
        })}
      </div>
    </div>
  )
}

export default App
