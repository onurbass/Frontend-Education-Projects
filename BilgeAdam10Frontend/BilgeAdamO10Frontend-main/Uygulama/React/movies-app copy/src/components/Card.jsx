import React from 'react'

const Card = ({film}) => {
    
  return (
    <div className='film-card'>
        <img src={film.coverImage} alt={film.name} />
        <h3>{film.name}</h3>
        <div>
            <p>Yıl: {film.year} </p>
            <p>Yönetmen: {film.director} </p>
        </div>
    </div>
  )
}

export default Card