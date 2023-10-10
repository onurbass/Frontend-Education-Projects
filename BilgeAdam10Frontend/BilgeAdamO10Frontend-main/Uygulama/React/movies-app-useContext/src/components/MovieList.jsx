import React, { useContext } from 'react'
import { MoviesContext } from '../context/MoviesContext'
import Card from '../../../movies-app/src/components/Card'

const MovieList = () => {
    const {filteredFilms} = useContext(MoviesContext)
  return (
    <div className='films'>
    {filteredFilms.map((film,index) => (
      <Card key={index} film={film}/>
    ))}
  </div>
  )
}

export default MovieList