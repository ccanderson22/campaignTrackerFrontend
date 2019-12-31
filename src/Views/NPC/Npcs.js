import React, { useEffect } from 'react'
import { Paper, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import * as nActions from '../../Redux/Actions/npcActions'
import Grid from '@material-ui/core/Grid';
import NpcCard from '../../Components/NPC/NpcCard'
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    page: {
        position: 'relative',
        // height: '1000px',
        width: '100%',
        backgroundColor: 'gray'
    },
    title: {
        textAlign: 'center',
        paddingBottom: '1%',
        // paddingTop: '2%'
    },
    addBtn: {
        width: '100%'
    }
    
})

export default function Npcs() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const npcState  = useSelector(state => state.npc);
    const campaignState  = useSelector(state => state.campaign)
    const campaignId = sessionStorage.getItem('campaignId')

    
    useEffect(() =>  {
        console.log('ID: ', campaignState.campaignId)
        // dispatch(nActions.setNpcsAsync(campaignState.campaignId)) campaignState.campaignId,
        dispatch(nActions.setNpcsAsync(campaignId))
    }, [campaignState, campaignId, dispatch])

   const selectNpc = (npc) => {
        // dispatch(nActions.setNpcId(npc));
        sessionStorage.setItem('npc', JSON.stringify(npc))
    }

    return (
        <Container maxWidth='xl'>
                <Paper>
                        <Typography variant="h2" className={classes.title}>
                            NPCs
                        </Typography>
                    
                    <Grid justify="center" container spacing={3}>
                                {npcState.npcs.map(npc => (
                                    <Grid item xs={6} md={3} key={npc._id}>
                                        <Link onClick={() => selectNpc(npc)} to='/campaign/npcs/details'>
                                            <NpcCard 
                                            npc={npc}
                                            /> 
                                        </Link>
                                    </Grid>
                                ))}
                            </Grid>
                    
                </Paper>
        </Container>
    )
}