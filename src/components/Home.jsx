import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Home = ({ personajes, page, setPage, setPersonajes }) => {
  const [name, setName] = useState('')

  const handlePageNext = () => {
    setPage(page + 1)
  }

  const handlePagePrev = () => {
    setPage(page - 1)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
    const { results } = await response.json()
    setPersonajes(results)
  }

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <div className='header'>
        <button disabled={page === 1 ? 'disabled' : ''} onClick={handlePagePrev}>
          {'<<'}
        </button>
        <h1>Rick & Morty</h1>
        <button onClick={handlePageNext}>{'>>'}</button>
      </div>

      <form className='search-filter' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Morty Smith'
          value={name}
          onChange={handleChange}
        />
        <button>Buscar</button>
      </form>

      <div className='container'>
        {personajes.map((personaje) => (
          <div key={personaje.id}>
            <Link to={`/${personaje.id}`}>
              <div className='personaje'>
                <img src={personaje.image} alt={personaje.name} />
                <h2>{personaje.name}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
