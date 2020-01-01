import React from 'react'
import { Typography, Container, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    center: {
        textAlign: 'center'
    }
})

export default function NpcDetails() {
    const npc = JSON.parse(sessionStorage.getItem('npc'))
    const classes = useStyles();

    return (
        <Container> 
                <Grid container>
                    <Grid item xs={6}>
                        <Grid container>
                            <Grid item>   
                                <Typography variant='h1'>
                                    IMAGE WILL GO HERE
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}> 
                        <Grid container spacing={3}>
                            <Grid item xs={12}>    
                                <Typography className={classes.center} variant='h4'>
                                   {npc.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography>
                                   <b> Alignment:</b> <br/> {npc.alignment}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
        </Container>
    )
}
//TODO: Actually flesh out this page to show all details