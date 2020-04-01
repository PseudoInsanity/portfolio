import React from 'react';
import { useStyles } from './Header.js';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Buttonbase from '../Buttonbase/Buttonbase.jsx';
import Box from '@material-ui/core/Box';
import ProfileImage from '../../img/edmir.png';


const Header = () => {
    const classes = useStyles();
    return (
        <Grid direction="column" container item xs={12} justify="center" alignItems="center">
            <Avatar style={{ width: '250px', height: '250px' }} className={classes.avatar} alt="Edmir Suljic" src={ProfileImage} />
            <Typography className={classes.title} variant="h1">Edmir Suljic</Typography>
            <Box width="40%">
                <Typography className={classes.text} variant="body1">My name is Edmir Suljic and I am a newly graduated Computer Scientist who is eager to learn new things and to start my journey.</Typography>
            </Box>
            <Buttonbase />
        </Grid>
    )
}

export default Header;