import React, {useState, useEffect} from 'react'
import { Container, Grid, Typography, TextField } from '@material-ui/core'

export default function NpcPersonality(){
    const npc = JSON.parse(sessionStorage.getItem('npc')) 
    
    useEffect(() => {
        // console.log(npc.prof)
    }, []);

    return (

        <Container>
            <form>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        
                    </Grid>
                </Grid>
            </form>
        </Container>
        // Goals, ticks, flaws, oddities, notes
    )
}