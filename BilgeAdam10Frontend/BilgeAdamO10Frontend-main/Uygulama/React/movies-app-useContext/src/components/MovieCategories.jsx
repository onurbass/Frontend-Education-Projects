import React, { useContext } from 'react'
import { MoviesContext } from '../context/MoviesContext'

const MovieCategories = () => {

    const {categories, handleCategoryChange}   = useContext(MoviesContext)


  return (
    <div className="categories">
        {categories.map((category,index) => (
          <button key={index} onClick={() => handleCategoryChange(category)}>{category}</button>
        ))}
      </div>
  )
}

export default MovieCategories