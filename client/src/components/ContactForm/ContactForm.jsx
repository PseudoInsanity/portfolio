import React, { useState } from 'react';
import { useStyles } from './ContactForm.js';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';


const ContactForm = () => {
    const classes = useStyles();
    const [status, setStatus] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();

        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus('SUCCESS');
            } else {
                setStatus('ERROR');
            }
        };
        xhr.send(data);

    }

    return (
        <form
            className={classes.root}
            noValidate
            autoComplete="off"
            action="https://formspree.io/mrgakalb"
            method="POST"
            onSubmit={handleSubmit}>
            <Grid item container direction="column" justify="center" alignItems="center">
                <TextField
                    id="outlined-search"
                    label="Enter name"
                    type="name"
                    name="name"
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    id="outlined-search"
                    label="Enter email"
                    type="email"
                    name="_replyto"
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    id="outlined-textarea"
                    multiline
                    rows="4"
                    type="message"
                    name="message"
                    label="Enter message"
                    variant="outlined"
                    color="secondary"
                />
                {status === 'SUCCESS' ? <Typography variant="body1">Thank you for the email!</Typography> : <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.button}
                >
                    Send email
                </Button>}
                {status === 'ERROR' && <Typography variant="body1">Oops! There was an error, please try again!</Typography>}
            </Grid>

        </form>
    )
}

export default ContactForm;