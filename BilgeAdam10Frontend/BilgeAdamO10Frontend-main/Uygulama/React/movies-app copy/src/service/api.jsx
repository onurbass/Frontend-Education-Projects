import axios from 'axios'

export const getFilms = async () => {
    try {
        const response = await axios.get("http://localhost:3000/films")
        return response.data
    } catch (error) {
        console.error("Filmler alınırken bir hata oluştu:", error)
        return []
    }
}