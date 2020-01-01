import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea, makeStyles, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    image: {
        height: 0, 
        paddingTop: '56%'
    },
    card: {
        backgroundColor: 'silver',
        marginLeft: '1%',
        marginRight: '1%',
    }
})

export default function CampaignCard(props) {
    const classes = useStyles();
    const { campaign } = props

    return (
        <div>
            <Card 
            className={classes.card}
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
        </div>
    )
}

//TODO: Tweak card backend for campaign images