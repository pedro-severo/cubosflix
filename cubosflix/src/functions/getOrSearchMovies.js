import axios from "axios"
import { API_KEY, BASE_URL } from "../constants"

export const getOrSearchMovies = async (movieName) => {

    try {
        const url = movieName ? (
            `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${movieName}`
        ) : (
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=1`
        )

        const response = await axios.get(url)

        return response.data.results
    
    } catch (error) {
        console.log(error)
    }
}