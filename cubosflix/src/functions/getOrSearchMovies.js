import axios from "axios"

export const getOrSearchMovies = async (movieName) => {

    try {
        const url = movieName ? (
            `https://api.themoviedb.org/3/search/movie?api_key=883ee274b7ce2d49978875c3d25de159&query=${movieName}`
        ) : (
            "https://api.themoviedb.org/3/movie/top_rated?api_key=883ee274b7ce2d49978875c3d25de159&page=1"
        )

        const response = await axios.get(url)

        return response.data.results
    
    } catch (error) {
        console.log(error)
    }

    // const url = movieName ? (
    //     `https://api.themoviedb.org/3/search/movie?api_key=883ee274b7ce2d49978875c3d25de159&query=${movieName}`
    // ) : (
    //     "https://api.themoviedb.org/3/movie/top_rated?api_key=883ee274b7ce2d49978875c3d25de159&page=1"
    // )

    // axios.get(url).then(response => {
    //     console.log(response.data.results)
    //     return response.data.results
    // }).catch(error => {
    //     return error
    // })
}