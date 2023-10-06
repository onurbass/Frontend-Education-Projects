

import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card';
import { getFilms } from './service/api';

function App() {
  const categories = ["Tümü", "Aksiyon", "Drama", "Komedi"];
  const [films, setFilms] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("Tümü")

  useEffect(() => {
    getFilms().then(data => setFilms(data))
  }, [])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const filteredFilms = selectedCategory === "Tümü" ? films : films.filter(film => film.category === selectedCategory)

  return (
    <div className='app'>
      <h1>Filmler Projesi</h1>
      <div className="categories">
        {categories.map(category => (
          <button onClick={() => handleCategoryChange(category)}>{category}</button>
        ))}
      </div>
      <div className='films'>
        {filteredFilms.map(film => (
          <Card film={film}/>
        ))}
      </div>
    </div>
  )
}

export default App
