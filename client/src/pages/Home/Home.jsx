import React from 'react';
import HomeText from '../../components/HomeText/HomeText.jsx';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import Buttonbase from '../../components/Buttonbase/Buttonbase.jsx';
import Particles from 'react-particles-js';
import { useStyles } from './Home.js';
import { Grid } from '@material-ui/core';

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Grid item container xs={12} id="home" justify="center" direction="column" alignItems="center">
                <HomeText />
                <Buttonbase />
            </Grid>
        </div>
    )
}

export default Home;