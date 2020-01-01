import React, { useState, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import * as cActions from '../../Redux/Actions/campaignActions'
import { TextField,
        Button, 
        Typography,
        ExpansionPanel,
        ExpansionPanelSummary, 
        ExpansionPanelDetails, 
        ExpansionPanelActions, Grid, IconButton, Chip, makeStyles } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  chip: {
    position: 'relative',
    padding: '1%',
    margin: '1%'
  }
    
  
}))

export default function AddCampaignForm() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [players, setPlayers] = useState([]);
    const [show, setShow] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        let newCampaign = {
            name: e.target.campaignName.value,
            players: players,
        }
        console.log(newCampaign)
        dispatch(cActions.addCampaignAsync(newCampaign))
        document.getElementsByName('campaignName')[0].value = '';
      }

    const handleShow = () => {
        setShow(!show)
    }

    const removePlayer = (player) => {
      let newPlayers = []
      players.forEach((plyr) => {
        if(player !== plyr){
          newPlayers.push(plyr)
        }
      })
      setPlayers(newPlayers)
    }

    const addPlayer = (e, player) => {
        e.preventDefault();
        if(players){
          setPlayers([...players, player])
        } else {
          setPlayers([player])
        }
       document.getElementsByName('player')[0].value = '';
    }

    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}>
              <Typography>
                Add new Campaign 
              </Typography>
          </ExpansionPanelSummary>
          <form onSubmit={(e) => handleSubmit(e)}>
          <ExpansionPanelDetails>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <TextField 
                          normal='true' 
                          fullWidth 
                          required 
                          id="standard-required" 
                          label="Campaign Name" 
                          variant='outlined' 
                          name='campaignName'/>
                        </Grid>
                      {show ? (
                        <Fragment>
                            <Grid item xs={10}>
                            <TextField 
                              className='player' 
                              normal='true' 
                              fullWidth
                              id="standard-required" 
                              label="Player" 
                              variant='outlined' 
                              name='player'/>
                          </Grid>
                          <Grid item xs={1}>
                            <IconButton 
                              onClick={(e) => addPlayer(e, document.getElementsByName('player')[0].value)} 
                              variant='contained' 
                              color='primary'
                              title='Add Player'>
                              <AddCircleOutlineIcon
                                fontSize='large'
                                />
                            </IconButton>
                          </Grid>
                        <Grid item xs={12}>
                            <div>
                              <Typography>Players:</Typography>
                                {players.map(player => (
                                    <Chip 
                                      className={classes.chip}
                                      key={player}
                                      label={player}
                                      onDelete={() => removePlayer(player)}/>
                                ))}
                            </div>
                          </Grid>
                        </Fragment>
                      ) : (
                        <Button onClick={() => handleShow()}>Add Players</Button>
                      )}
                    </Grid>
                  
          </ExpansionPanelDetails>
          <ExpansionPanelActions>
                      <Button type='submit'>Submit</Button>
          </ExpansionPanelActions>
          </form>
        </ExpansionPanel>
      </div>
    )
}


