import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import styles from './Character.module.css'

const Character = () => {

  const { id } = useParams()
  const [personaje, setPersonaje] = useState(null)

  const getCharacterId = async() => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await response.json()
    setPersonaje(data)
  }

  useEffect(() => {
    getCharacterId()
  }, [])

  return (
    <div>
      {
        personaje && 
          <div>
            <h1>{personaje.name}</h1>
            <img src={personaje.image} alt={personaje.name} />

            <div className={styles.row}>
              <h3>Estado</h3>
              <p>:</p>
              <p>{personaje.status}</p>
            </div>
 
            <div className={styles.row}>
              <h3>Especie</h3>
              <p>:</p>
              <p>{personaje.species}</p>
            </div>

            <div className={styles.row}>
              <h3>Tipo</h3>
              <p>:</p>
              <p>{personaje.type}</p>
            </div>

            <div className={styles.row}>
              <h3>Género</h3>
              <p>:</p>
              <p>{personaje.gender}</p>
            </div>

            <div className={styles.row}>
              <h3>Origen</h3>
              <p>:</p>
              <p>{personaje.origin.name}</p>
            </div>
            
          </div>
      }
    </div>
  )
}

export default Character