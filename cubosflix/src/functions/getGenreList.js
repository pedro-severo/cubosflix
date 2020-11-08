import axios from "axios"
import { API_KEY, BASE_URL } from "../constants"

export const getGenreList = async () => {

    try {
        const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
        
        return response.data.genres
    
    } catch (error) {
        console.log(error)
    }
}