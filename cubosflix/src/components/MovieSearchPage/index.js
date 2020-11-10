import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getOrSearchMoviesByNameOrGenre } from "../../functions/getOrSearchMoviesByNameOrGenre"
import { useForm } from "../../hooks/useForm"
import GenreListOptions from "../GenreListOptions"
import MovieCard from "../MovieCard"
import PageSelector from "../PageSelector"
import { goToMovieDetailPage } from "../Router/routeActions"
import { FormContainer, MovieCardsContainer, MovieSearchPageContainer } from "./styles"


const MovieSearchPage = () => {
    const history = useHistory()
    const [ movieList, setMovieList ] = useState(null)
    const {form, onChange} = useForm({
        movieName: "",
        genre: ""
    })
    const [pageNumber, setPageNumber] = useState(1)
    const [indexToRenderMovieList, setIndexToRenderMovieList] = useState(0)
    const [apiPage, setApiPage] = useState(1)

    const handleClickNextOrPreviousPage = (direction) => {
        if (direction === "next") {
            setPageNumber(pageNumber + 1)
            if (indexToRenderMovieList === 15) {
                setIndexToRenderMovieList(0)
                setApiPage(apiPage + 1)
            } else {
                setIndexToRenderMovieList(indexToRenderMovieList + 5)
            }
        } else if (direction === "previous") {
            setPageNumber(pageNumber - 1)
            if (indexToRenderMovieList === 0) {
                setApiPage(apiPage - 1)
                setIndexToRenderMovieList(15)
            } else {
                setIndexToRenderMovieList(indexToRenderMovieList - 5)
            }
        }
    }

    useEffect(() => {
        const { movieName, genre } = form

        getOrSearchMoviesByNameOrGenre(movieName, genre, 1, 0).then(response => {
            console.log(response)
            setMovieList(response)
            setPageNumber(1)
            setIndexToRenderMovieList(0)
        })

    }, [form.movieName, form.genre]);

    useEffect(() => {
        const { movieName, genre } = form

        getOrSearchMoviesByNameOrGenre(movieName, genre, apiPage, indexToRenderMovieList).then(response => {
            setMovieList(response)
        })

    }, [pageNumber, indexToRenderMovieList, apiPage])

    const handleMovieCardClick = (movieId) => {
        goToMovieDetailPage(history, movieId)
    }

    return (
        <MovieSearchPageContainer>
            <FormContainer>
                <input 
                    name="movieName" 
                    value={form.movieName} 
                    onChange={onChange} 
                    placeholder="Search by name" 
                />
                <GenreListOptions 
                    form={form}
                    onChange={onChange}
                />
            </FormContainer>
            <MovieCardsContainer>
                {movieList && movieList.map(movie => {
                    return <MovieCard 
                        key={movie.id} 
                        movieInfos={movie}
                        handleMovieCardClick={handleMovieCardClick}
                    />
                })}
            </MovieCardsContainer>
            <PageSelector
                pageNumber={pageNumber}
                handleClickNextOrPreviousPage={handleClickNextOrPreviousPage}
                movieName={form.movieName}
            />
        </MovieSearchPageContainer>
    )
}

export default MovieSearchPage