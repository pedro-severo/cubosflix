import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MovieCard from "../MovieCard"
import MovieDetailPage from "../MovieDetailPage"
import MovieSearchPage from "../MovieSearchPage"


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <MovieSearchPage />
                </Route>
                <Route exact path="/movie-detail/:movieId">
                    <MovieDetailPage />
                </Route>
                <Route exact path="/teste">
                    <MovieCard />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router