import React from 'react';
import Header from '../../components/Header/Header.jsx';
import {useStyles} from './Home.js';

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.background} id="home">
        <Header></Header>
        </div>
    )
}

export default Home;