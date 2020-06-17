import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useStyles } from './TopBar.js';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-scroll';
import PdfModal from '../PdfModal/PdfModal.jsx';


export const TopBar = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);


    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                <Button><Typography variant="body2">Contact</Typography></Button>
                </Link>

                <Button onClick={handleClick}> <Typography variant="body2">CV</Typography> </Button>

                <PdfModal open={open} handleClose={handleClose} />
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;