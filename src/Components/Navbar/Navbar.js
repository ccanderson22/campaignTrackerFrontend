import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    navbar: {
        backgroundColor: 'gray',
    },
    link: {
        color: 'white',
    }
})

export default function Navbar() {
    const classes = useStyles();

    return (
        
            <AppBar position="sticky" className={classes.navbar}>
                <Toolbar>
                    <Link
                    className={classes.link}
                    to="/campaign/npcs">
                    NPCs
                    </Link>
                    
                </Toolbar>
            </AppBar>
    //    window.location.pathname.includes('campaign') ? ( ) : (
    //         ''
    //     )
    )
}