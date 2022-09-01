import { useState, useEffect } from 'react'
import PokeCards from './components/PokeCards'
import api from './services/api'

function App() {
  const [count, setCount] = useState(5)
  const [pokemons, setPokemons] = useState([])

  const Carregar = function(){
    setCount((count) => count + 5)
    let contador = count - 4;
    console.log("aqui : ", count, contador);
    getPokemons(count, contador)
  }

  const getPokemons = async (total, contador) => {
    const listPokemons = []

    for(let i = contador; i <= total; i++) {
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
    Carregar()
  }, [])

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      Carregar()
    }
};

  return (

    <div className="App container">
      <h1>Pokemons Primeira Geração</h1>
      <div className="cards">

        {pokemons?.map(poke => {
          return <PokeCards pokemon={poke} />
        })}

      </div>
      <button onClick={Carregar}>Mais</button>
    </div>

  )
}

export default App
