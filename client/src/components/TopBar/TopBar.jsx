import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useStyles } from './TopBar.js';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-scroll';


export const TopBar = (props) => {
    const classes = useStyles();

    return (

        <AppBar elevation={0} position="sticky" className={classes.appBar}> 
            <Toolbar variant="dense" className={classes.root}>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <Button><Typography variant="body2">About</Typography></Button>
                </Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <Button><Typography variant="body2">Projects</Typography></Button>
                </Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                <Button><Typography variant="body2">Contact me</Typography></Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;