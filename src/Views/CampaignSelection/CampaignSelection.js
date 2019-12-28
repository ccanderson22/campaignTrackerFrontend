import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import * as cActions from '../../Redux/Actions/campaignActions'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CampaignCard from '../../Components/Campaign/CampaignCard';
import { Container, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    page: {
        height: '1000px',
        width: '100%',
        backgroundColor: 'gray'
    },
    title: {
        textAlign: 'center',
        paddingBottom: '5%',
        paddingTop: '2%'
    }
    
})

export default function CampaignSelection(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const campaignState  = useSelector(state => state.campaign)

    useEffect(() => {
        dispatch(cActions.setCampaignsAsync());
    }, [dispatch]);

    function selectCampaign(id) {
        dispatch(cActions.setCampaignId(id))
    
    }

    return (
        <Container> 
                <Paper className={classes.page} elevation={3}>
                    <Typography variant="h2" className={classes.title}>
                       Campaigns
                    </Typography>
                    <Grid justify="center" container spacing={3}>
                        {campaignState.campaigns.map(campaign => (
                            <Grid item xs={3} key={campaign._id}>
                                <Link onClick={() => selectCampaign(campaign._id)} to='/campaign'>
                                    <CampaignCard 
                                    campaign={campaign}
                                    /> 
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
        </Container>
    )
}