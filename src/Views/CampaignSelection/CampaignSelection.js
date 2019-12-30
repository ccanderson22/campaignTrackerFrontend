import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import * as cActions from '../../Redux/Actions/campaignActions'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CampaignCard from '../../Components/Campaign/CampaignCard';
import { Container, Typography, Button, Dialog } from '@material-ui/core';
import { Link } from "react-router-dom";
import AddCampaignForm from '../../Components/Campaign/AddCampaignForm';

const useStyles = makeStyles({
    page: {
        position: 'relative',
        // height: '1000px',
        width: '100%',
        backgroundColor: 'gray'
    },
    title: {
        textAlign: 'center',
        paddingBottom: '5%',
        paddingTop: '2%'
    },
    addBtn: {
        width: '100%'
    }
    
})

export default function CampaignSelection(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const campaignState  = useSelector(state => state.campaign)
    const [open, setOpen] = useState(false)
    useEffect(() => {
        dispatch(cActions.setCampaignsAsync());
    }, [dispatch]);

    function handleModal() {
        setOpen(!open)
    }

    function selectCampaign(id) {
        dispatch(cActions.setCampaignId(id))
    
    }

    return (
        <Container> 
                <Paper className={classes.page} elevation={3}>
                    <Typography variant="h2" className={classes.title}>
                       Campaigns
                    </Typography>
                    <Grid container justify='center'>
                        <Grid item xs={9}>
                            <Button 
                            className={classes.addBtn} 
                            color='primary' 
                            variant="contained"
                            onClick={handleModal}>
                                Add New Campaign
                                </Button>
                        </Grid>
                    </Grid>
                    <Grid justify="center" container spacing={3}>
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
                        
                            <AddCampaignForm 
                            open={open}
                            close={handleModal}
                            />
                        
                </Paper>
        </Container>
    )
}

