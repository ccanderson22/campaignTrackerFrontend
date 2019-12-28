import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import routes from './route'
import { Switch, Route, Redirect } from "react-router-dom";
import CampaignSelection from '../../Views/CampaignSelection/CampaignSelection'

export default function Routes(props) {
    const campaignState  = useSelector(state => state.campaign)

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