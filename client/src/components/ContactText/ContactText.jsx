import React from 'react';
import { useStyles } from './ContactText.js';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
import IconButton from "@material-ui/core/IconButton";
import { ButtonBase } from '@material-ui/core';

const Header = () => {
    const classes = useStyles();

    return (
        <Grid item container direction="row" >
            <Grid direction="column" item xs={6} container justify="center" alignItems="flex-end" className={classes.grid}>
                <IconButton style={{ width: '60px', height: '60px' }} href="#" color="inherit">
                    <Avatar style={{ width: '60px', height: '60px' }} className={classes.avatar}>
                        <EmailIcon style={{ width: '40px', height: '40px' }} />
                    </Avatar>
                </IconButton>

                <IconButton style={{ width: '60px', height: '60px' }} href="#" color="inherit">
                    <Avatar style={{ width: '60px', height: '60px' }} className={classes.avatar}>
                        <PhoneIcon style={{ width: '40px', height: '40px' }} />
                    </Avatar>
                </IconButton>

                <IconButton style={{ width: '60px', height: '60px' }} href="https://github.com/PseudoInsanity" target="_blank" color="inherit">
                    <Avatar style={{ width: '60px', height: '60px' }} className={classes.avatar}>
                        <GitHubIcon style={{ width: '40px', height: '40px' }} />
                    </Avatar>
                </IconButton>

                <IconButton style={{ width: '60px', height: '60px' }} href="https://www.linkedin.com/in/edmir-suljic-189860140/" target="_blank" color="inherit">
                    <Avatar style={{ width: '60px', height: '60px' }} className={classes.avatar}>
                        <LinkedInIcon style={{ width: '40px', height: '40px' }} />
                    </Avatar>
                </IconButton>
            </Grid>

            <Grid direction="column" item xs={6} container justify="space-evenly" alignItems="flex-start" color="inherit" className={classes.grid}>
                <Typography variant="h6"> edmir_2@live.se</Typography>

                <Typography variant="h6">+46736910611</Typography>

                <Typography variant="h6">Pseudo Insanity</Typography>

                <Typography variant="h6">Edmir Suljic</Typography>
            </Grid>
        </Grid>

    )
}

export default Header;