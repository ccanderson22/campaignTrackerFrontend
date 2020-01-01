import React from 'react'
import { makeStyles, Card, Avatar, CardContent, Typography, CardActionArea, Grid, CardHeader, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),

    },
  }));

export default function NpcCard(props) {
    const classes = useStyles();
    const { npc } = props;


    return (//Maybe on this root class for the cards
        <Card elevation={3}>
            <CardActionArea> 
                      <CardHeader
                      avatar= {<Avatar className={classes.large} src="http://klubbsaga2015.wdfiles.com/local--files/half-orc/Half-Orc%2038%20%28Sir%20Albert%20Portrait%2C%20by%20artbytravis%29.jpg"/>}
                      title={<Typography noWrap>{npc.name}</Typography>} 
                      subheader={'Alignment: ' + npc.alignment}
                      />
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>  
                            <Typography>
                               <b>Race: </b> {npc.race}  
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>
                               <b>Age:</b>  {npc.age}
                            </Typography>
                        </Grid>
                    </Grid>
                    </CardContent>
            </CardActionArea>
        </Card>
    )
}
