import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as cActions from '../../Redux/Actions/campaignActions'
import { TextField, Button, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function AddCampaignForm(props) {
    const dispatch = useDispatch();
    const [players, setPlayers] = useState([]);
    const { open, close } = props; 

    const handleSubmit = (e) => {
        e.preventDefault();
        let newCampaign = {
            name: e.target.campaignName.value,
            players: players,
        }
        console.log(newCampaign)
        dispatch(cActions.addCampaignAsync(newCampaign))
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
        <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Campaign</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a new Campaign name and player names
          </DialogContentText>
            <form onSubmit={(e) => handleSubmit(e)}>
                    <TextField normal fullWidth required id="standard-required" label="Campaign Name" variant='outlined' name='campaignName'/>
                    <br/>
                    <br/>
                      <TextField className='player' normal required id="standard-required" label="Player" variant='outlined' name='player'/>
                    <Button onClick={(e) => addPlayer(e, document.getElementsByName('player')[0].value)} variant='contained' color='primary'>Add Player</Button>
                   {/* TODO: Make the displayed players pills  */}
                    <Typography>
                    Players: <br/>
                      {players.join(', ')}
                    </Typography>
                    <DialogActions>
                    <Button type='submit'>Submit</Button>
                    <Button onClick={close} color="primary">
                        Cancel
                    </Button>
                    </DialogActions>
                </form>
        </DialogContent>
        <DialogActions>
         {/* <Button onClick={handleClose} color="primary">
            Subscribe
          </Button> */}
        </DialogActions>
      </Dialog>
        
    )
}


