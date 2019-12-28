import React, { useEffect } from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import * as nActions from '../../Redux/Actions/npcActions'


export default function Npcs() {
    const dispatch = useDispatch();
    const npcState  = useSelector(state => state.npc);
    const campaignState  = useSelector(state => state.campaign)

    
    useEffect(() =>  {
        console.log('ID: ', campaignState.campaignId)
        dispatch(nActions.setNpcsAsync(campaignState.campaignId))
    }, [campaignState, campaignState.campaignId, dispatch])
    return (
        <Paper>
            <Typography>
                NPC Placeholder
            </Typography>
        </Paper>
    )
}