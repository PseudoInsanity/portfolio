import React from 'react';
import { useStyles } from './ContactForm.js';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const ContactForm = () => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Grid item container direction="column">
                <TextField
                    id="outlined-search"
                    label="Enter name"
                    type="search"
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    id="outlined-search"
                    label="Enter email"
                    type="search"
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    id="outlined-textarea"
                    multiline
                    rows="4"
                    label="Enter message"
                    variant="outlined"
                    color="secondary"
                />
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}>
                    Send email
                </Button>
            </Grid>
        </form>
    )
}

export default ContactForm;