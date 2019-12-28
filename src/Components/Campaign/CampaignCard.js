import React from 'react'
import { useDispatch } from 'react-redux'
import * as cActions from '../../Redux/Actions/campaignActions'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea, Grid, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    image: {
        height: 0, 
        paddingTop: '56%'
    },
    card: {
        backgroundColor: 'silver'
    }
})

export default function CampaignCard(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { campaign } = props

    // function selectCampaign(id) {
    //     dispatch(cActions.setCampaignId(id))
    // }

    return (
        <Card 
        className={classes.card}
        // onClick={() => selectCampaign(campaign._id)}
        variant="outlined"> 
            <CardActionArea>
                <CardMedia
                className={classes.image}
                image="https://dummyimage.com/640x360/fff/aaa"
                src="https://dummyimage.com/640x360/fff/aaa"
                title="Placeholder Title"
                />
                <CardContent>
                    <Typography>
                        {campaign.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

//TODO: Tweak card backend for campaign images