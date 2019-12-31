import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import routes from './route'
import { Switch, Route } from "react-router-dom";

export default function Routes(props) {

    useEffect(() => {

    }, [])

    return (
        <Switch>
            {routes.map((prop, key) => {
                return (
                    <Route 
                        exact 
                        path={prop.path}
                        component={prop.component}
                        key={key}
                    />
                )
            })}
        </Switch>
    )
}