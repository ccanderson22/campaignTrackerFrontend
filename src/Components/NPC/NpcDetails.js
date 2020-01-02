import React, {useEffect} from 'react'
import { Typography, Container, Grid, makeStyles, Divider } from '@material-ui/core'

const useStyles = makeStyles({
    page: {
        // height: '90vh'
    },
    image: {

    }
})

export default function NpcDetails() {
    const npc = JSON.parse(sessionStorage.getItem('npc'))
    const classes = useStyles();
    // useEffect(() => {
    //     getKeys(npc)
    // }, [npc])

    // const getKeys= (obj) => {
    //     for (var key of Object.keys(obj)) {
    //         if(!key.includes('_')){ 
    //             console.log(key + ' = ' + JSON.stringify(obj[key]) )
    //         }
    //     }
    // }
    return (
        <Container className={classes.page}> 
                <Grid container>
                    <Grid item xs={6}>
                        <Grid container>
                            <Grid item xs={12}>   
                               <Typography align='center' variant='h1'>
                                    IMAGE WILL GO HERE
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>   
                               <Typography align='center' variant='body1'>
                                    {npc.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}> 
                        <Grid container spacing={3}>
                            <Grid item xs={12}>    
                               <Typography align='center' align='center' variant='h4'>
                                   {npc.name}
                                </Typography>
                            </Grid>
                            <Divider /> 
                            <Grid item xs={6} md={4}>
                               <Typography align='center'>
                                   <b> Alignment:</b> <br/> {npc.alignment}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={4}>
                               <Typography align='center'>
                                   <b> Sex:</b> <br/> {npc.sex}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={4}>
                               <Typography align='center'>
                                   <b> Race:</b> <br/> {npc.race}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={4}>
                               <Typography align='center'>
                                   <b> Age:</b> <br/> {npc.age}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={4}>
                               <Typography align='center'>
                                   <b> Eyes:</b> <br/> {npc.eyes}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={4}>
                               <Typography align='center'>
                                   <b> Hair:</b> <br/> {npc.hair}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={4}>
                               <Typography align='center'>
                                   <b> Height:</b> <br/> {npc.height}"
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
        </Container>
    )
}
//TODO: Actually flesh out this page to show all details