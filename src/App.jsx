import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Character from './components/Character'

import './App.css'


function App() {

  const [personajes, setPersonajes] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchPersonajes = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const { results } = await response.json()
      setPersonajes(results)
      return
    }

      fetchPersonajes()
  },[page])

  return (
    <>
      <Routes>
        <Route path="/" element={ 
          <Home 
            personajes={personajes} 
            page={page}
            setPage={setPage} 
          /> } />
        <Route path="/:id" element={ <Character /> } />
        <Route path="/*" element={ <h1>Page Not Found</h1> } />
      </Routes>
    </>
  )
}

export default App
