import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from "../Header"
import MovieCard from "../MovieCard"
import MovieDetailPage from "../MovieDetailPage"
import MovieSearchPage from "../MovieSearchPage"
import { goBack } from "./routeActions"


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Header headerTitle="Movies" />
                    <MovieSearchPage />
                </Route>
                <Route exact path="/movie-detail/:movieId">
                    <Header headerTitle="Movie Detail" goBack={goBack} />
                    <MovieDetailPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router