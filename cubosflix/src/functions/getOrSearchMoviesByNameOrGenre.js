import axios from "axios"
import { API_KEY, BASE_URL } from "../constants"

export const getOrSearchMoviesByNameOrGenre = async (movieName, genre) => {

    try {
        const url = movieName ? (
            `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${movieName}`
        ) : (
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=1`
        )

        const response = await axios.get(url)

        const responseFilteredByGenre = genre ?  (
            response.data.results.filter(movie => {
                for (let id of movie.genre_ids) {
                    if (id === Number(genre)) {
                        return true
                    }
                }
            })
        ) : (response.data.results)

        return responseFilteredByGenre
    
    } catch (error) {
        console.log(error)
    }
}