import React, { useState } from 'react'
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, ExpansionPanelActions, Grid, TextField, Container,  MenuItem, makeStyles, InputAdornment, Button } from '@material-ui/core'
import constants from '../../Redux/constants'
import { useDispatch } from 'react-redux';
import * as nActions from '../../Redux/Actions/npcActions'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
    sex: {
        width: '100% !important'
    }
});

export default function AddNpcForm() {
    const dispatch = useDispatch();
    const [abVal, setAbVal] = useState('')
    const [amVal, setAmVal] = useState('')
    const [sex, setSex] = useState('')
    const [expanded, setExpanded] = useState(false)

    const handleAbValueChange = (e) => {
        setAbVal(e.target.value)
    }
    const handleAmValueChange = (e) => {
        setAmVal(e.target.value)
    } 
    const handleSexValueChange = (e) => {
        setSex(e.target.value)
    }
    const handleExpansion = () => {
        setExpanded(!expanded)
    }

    const clearForm = (names) => {
        names.forEach(name => {
           document.getElementsByName(name)[0].value = ''
        })
        setSex('')
        setAmVal('')
        setAbVal('')
    }
    
    // const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault();
        let newNpc = {
            campaignId: sessionStorage.getItem('campaignId'),
            name: e.target.name.value,
            alignment: e.target.alignBel.value + ' ' +  e.target.alignMoral.value,
            race: e.target.race.value,
            sex: e.target.sex.value,
            age: e.target.age.value,
            height: e.target.height.value,
            eyes: e.target.eyes.value,
            hair: e.target.hair.value,
            description: e.target.desc.value
        }
        console.log(newNpc)
        dispatch(nActions.addNpcAsync(newNpc))
        clearForm(['name', 'race', 'age','height', 'eyes', 'hair', 'desc']);
    }
    
    return (
        <div>
           
        <Container>
            <ExpansionPanel expanded={expanded} onClick={() => handleExpansion()}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography align='right'>
                        Add New NPC
                    </Typography>
                </ExpansionPanelSummary>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <ExpansionPanelDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={8}>
                            <TextField 
                                normal='true'
                                fullWidth
                                required
                                label='Name'
                                variant='outlined'
                                name='name'
                                />
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <TextField
                            onChange={(e) => handleAbValueChange(e)}
                                value={abVal}
                                fullWidth
                                label='Lawful-Chaotic'
                                select
                                name='alignBel'
                                variant='outlined'
                                >
                                {constants.alignmentBelief.map(bel => (
                                    <MenuItem 
                                        key={bel}
                                        value={bel}
                                        >{bel}</MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <TextField
                                onChange={(e) => handleAmValueChange(e)}
                                value={amVal}
                                fullWidth
                                select
                                label='Good-Evil'
                                variant='outlined'
                                name='alignMoral'
                                >
                                {constants.alignmentMoral.map(bel => (
                                    <MenuItem 
                                    key={bel}
                                    value={bel}
                                    >{bel}</MenuItem>
                                ))}
                                
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                fullWidth
                                label='Race'
                                variant='outlined'
                                name='race' />
                        </Grid>
                        <Grid item xs={12} sm={6} md={1}>
                            <TextField
                                onChange={(e) => handleSexValueChange(e)}
                                value={sex}
                                fullWidth
                                select
                                label='Sex'
                                variant='outlined'
                                name='sex'>
                                <MenuItem value={'Male'} >M</MenuItem>
                                <MenuItem value={'Female'}>F</MenuItem>
                                <MenuItem value={'Other'}>Other</MenuItem>
                                
                            </TextField>          
                        </Grid>
                        <Grid item xs={12} sm={3} md={1}>
                            <TextField 
                                type='number'
                                fullWidth
                                label='Age'
                                variant='outlined'
                                name='age'
                                />
                        </Grid>
                        <Grid item xs={12} sm={3} md={2}>
                            <TextField 
                                type='number'
                                fullWidth
                                label='Height'
                                variant='outlined'
                                name='height'
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">Inches</InputAdornment>,
                                  }}
                                />
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                fullWidth
                                label='Eyes'
                                name='eyes'
                                variant='outlined'
                                />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                fullWidth
                                label='Hair'
                                name='hair'
                                variant='outlined'
                                />
                        </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label='Description'
                                    variant='outlined'
                                    name='desc'
                                    multiline
                                    rows={4}
                                     />
                            </Grid>
                    </Grid>
                    </ExpansionPanelDetails>
                    <ExpansionPanelActions>
                        <Button type='submit'>Submit</Button>
                    </ExpansionPanelActions>
                </form>
            </ExpansionPanel>
        </Container>
        </div>
    )
}