import React from 'react';
import HomeText from '../../components/HomeText/HomeText.jsx';
import Particles from 'react-particles-js';

import { useStyles } from './Home.js';

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.background} id="home">
            <HomeText />
        </div >
    )
}

export default Home;