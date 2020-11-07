import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MovieDetailPage from "../MovieDetailPage"
import MovieSearchPage from "../MovieSearchPage"


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <MovieSearchPage />
                </Route>
                <Route exact path="/movie-detail">
                    <MovieDetailPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router