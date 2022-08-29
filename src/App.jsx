import { useState } from 'react'
import PokeCards from './components/PokeCards'
import api from './services/api'

function App() {
  const [pokemons, setPokemons] = useState([])

  return (
    <div className="App">
      <PokeCards />
      <PokeCards />
      <PokeCards />
      <PokeCards />
    </div>
  )
}

export default App
