import MoviesContextProvider from './context/MoviesContext'
import './App.css'
import MovieCategories from './components/MovieCategories'
import MovieList from './components/MovieList'

function App() {

  return (

    <MoviesContextProvider>
        <div className='app'>
      <h1>Filmler Projesi</h1>
      <MovieCategories/>
      <MovieList/>
      </div>
    </MoviesContextProvider>


  )
}

export default App
