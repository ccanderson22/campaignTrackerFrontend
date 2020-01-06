import React, {useEffect, Fragment} from 'react'
import { Typography, Container, Grid, makeStyles, Button, Paper, TextField } from '@material-ui/core'

const useStyles = makeStyles({
    page: {
        // height: '90vh'
    },
    details: {
        margin: '1%',
        midth: '100%',
        // height: '150%',
    },
    detail: {
        fontSize: '4vh',
    },
    title: {
        fontSize: '7vh',
       
    },
    label: {
        fontSize: '5vh'
    },
    image: {
        maxWidth: '20%',
        maxHeight: '20%',
    },
    addForm: {
        width: '100% !important'
    }
})

export default function NpcDetails(props) {
    const npc = JSON.parse(sessionStorage.getItem('npc'))
    const classes = useStyles();
    const {addImage} = props;
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
                               <div>
                                    {npc.image === 'TBD' ? (
                                        <Fragment>  
                                            <form className={classes.addForm}>
                                                <TextField name='image' placeholder='Add Image URL here'/>
                                                <Button onClick={() => addImage()}>
                                                    Add Photo
                                                </Button>
                                            </form>
                                        </Fragment>
                                    ) : (
                                    <img className={classes.image} src={npc.image} alt={npc.name} /> 
                                    )}
                               </div>
                            </Grid>
                            <Grid item xs={12}>   
                               <Typography align='center' variant='body1'>
                                    {npc.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}> 
                     <Paper elevation={2} className={classes.details}>    
                      <Container maxWidth='xl'>

                                <Grid container spacing={3}>
                                
                                            <Grid item xs={12}>    
                                            <Typography className={classes.title}  align='center' variant='h4'>
                                                {npc.name}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} md={4}>
                                            <Typography className={classes.detail} align='center'>
                                                <b className={classes.label}> Alignment:</b> <br/> {npc.alignment}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} md={4}>
                                            <Typography className={classes.detail} align='center'>
                                                <b className={classes.label}> Sex:</b> <br/> {npc.sex}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} md={4}>
                                            <Typography className={classes.detail} align='center'>
                                                <b className={classes.label}> Race:</b> <br/> {npc.race}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} md={4}>
                                            <Typography className={classes.detail} align='center'>
                                                <b className={classes.label}> Age:</b> <br/> {npc.age}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} md={4}>
                                            <Typography className={classes.detail} align='center'>
                                                <b className={classes.label}> Eyes:</b> <br/> {npc.eyes}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} md={4}>
                                            <Typography className={classes.detail} align='center'>
                                                <b className={classes.label}> Hair:</b> <br/> {npc.hair}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} md={4}>
                                            <Typography className={classes.detail} align='center'>
                                                <b className={classes.label}> Height:</b> <br/> {npc.height}"
                                                </Typography>
                                            </Grid>
                                
                                </Grid>
                      </Container>
                         </Paper>
                    </Grid>
                </Grid>
        </Container>
    )
}
//TODO: Actually flesh out this page to show all details