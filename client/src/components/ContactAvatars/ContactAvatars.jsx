import React from 'react';
import { useStyles } from './ContactAvatars.js';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from "@material-ui/core/IconButton";

const Header = () => {
    const classes = useStyles();

    return (
        <Grid item container direction="row" >
            <Grid direction="row" item xs={12} container justify="center" alignItems="flex-end" className={classes.grid}>

                <IconButton style={{ width: '60px', height: '60px', margin: '10px' }} href="https://github.com/PseudoInsanity" target="_blank" color="inherit">
                    <Avatar style={{ width: '60px', height: '60px', backgroundColor: '#46af49' }} className={classes.avatar}>
                        <GitHubIcon style={{ width: '40px', height: '40px' }} />
                    </Avatar>
                </IconButton>

                <IconButton style={{ width: '60px', height: '60px', margin: '10px' }} href="https://www.linkedin.com/in/edmir-suljic-189860140/" target="_blank" color="inherit">
                    <Avatar style={{ width: '60px', height: '60px', backgroundColor: '#46af49' }} className={classes.avatar}>
                        <LinkedInIcon style={{ width: '40px', height: '40px' }} />
                    </Avatar>
                </IconButton>

                <IconButton style={{ width: '60px', height: '60px', margin: '10px' }} href="https://www.instagram.com/edmirsuljic/" target="_blank" color="inherit">
                    <Avatar style={{ width: '60px', height: '60px', backgroundColor: '#46af49' }} className={classes.avatar}>
                        <InstagramIcon style={{ width: '40px', height: '40px' }} />
                    </Avatar>
                </IconButton>
            </Grid>
        </Grid>

    )
}

export default Header;