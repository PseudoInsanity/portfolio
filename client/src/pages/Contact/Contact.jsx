import React from 'react';
import {useStyles} from './Contact.js';
import TopBar from '../../components/TopBar/TopBar.jsx';


const Contact = () => {
    const classes = useStyles();

    return (
        <div className={classes.background} id="contact">
            <TopBar/>
        </div>
    )
}

export default Contact;