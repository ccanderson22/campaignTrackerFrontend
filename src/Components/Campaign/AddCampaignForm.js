import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import constants from '../../Redux/constants'
import * as cActions from '../../Redux/Actions/campaignActions'
import { TextField, Paper, Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function AddCampaignForm(props) {
    const dispatch = useDispatch();
    const [playerCount, setPlayetCount] = useState(0);
    const { open, close } = props; 

    const handleSubmit = (e) => {
        e.preventDefault();
        let newCampaign = {
            name: e.target.campaignName.value,
            players: e.target.players.value.split(', ' || ' '),
        }
        console.log(newCampaign)
        dispatch(cActions.addCampaignAsync(newCampaign))
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
                    <TextField normal fullWidth required id="standard-required" label="Players" variant='outlined' name='players'/>
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


