import { Link } from 'react-router-dom'

export const Home = ({ personajes, page, setPage }) => {

  const handlePageNext = () => {
    setPage(page + 1)
  }

  const handlePagePrev = () => {
    setPage(page - 1)
  }

  return (
    <div>
      <div className='header'>
        <button onClick={handlePagePrev}>{'<<'}</button>
        <h1>Rick & Morty</h1>
        <button onClick={handlePageNext}>{'>>'}</button>
      </div>
      
      <div className='container'>
        {
          personajes.map(personaje => (
            <div key={personaje.id}>
              <Link to={`/${personaje.id}`}>
                <div className='personaje' >
                  <img src={personaje.image} alt={personaje.name} />
                  <h2>{personaje.name}</h2>
                </div>
              </Link>
            </div>
            
          ))
        }
      </div>

    </div>
  )
      
}

export default Home
