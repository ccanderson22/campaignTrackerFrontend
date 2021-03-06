import React, {useEffect,} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import * as cActions from '../../Redux/Actions/campaignActions'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CampaignCard from '../../Components/Campaign/CampaignCard';
import { Container, Typography,} from '@material-ui/core';
import { Link } from "react-router-dom";
import AddCampaignForm from '../../Components/Campaign/AddCampaignForm';

const useStyles = makeStyles({
    page: {
        marginTop: '1%',
        position: 'relative',
        width: '100%',
        backgroundColor: 'gray'
    },
    title: {
        textAlign: 'center',
        paddingBottom: '1%',
        paddingTop: '1%'
    },
    addBtn: {
        width: '100%'
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
        // dispatch(cActions.setCampaignId(id))
        sessionStorage.setItem('campaignId', id)
    }


    return (
        <div>
            <Container maxWidth='xl'> 
                    <Paper className={classes.page} elevation={3}>
                        <Typography variant="h2" className={classes.title}>
                        Choose a Campaign
                        </Typography>
                        <Grid container justify='center'>
                            <Grid item xs={4}>
                                <AddCampaignForm 
                                />
                            </Grid>
                        </Grid>
                        <br/>
                        <Grid justify="center" container spacing={2}>
                            {campaignState.campaigns.map(campaign => (
                                <Grid item xs={6} md={4} key={campaign._id}>
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
        </div>
    )
}

