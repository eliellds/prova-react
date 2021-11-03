import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from "./pages/Home/Home"

export const Routes = () => {

    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home}/>
        </Switch>
    )

}