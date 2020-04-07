import React from 'react';
import { useStyles } from './Buttonbase.js';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-scroll';

const Buttonbase = () => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} justify="center" alignItems="center">
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>
                <ButtonBase
                    focusRipple
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}>
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="h3"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            About me
                    <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                </ButtonBase>
            </Link>
        </Grid>

    )
}
export default Buttonbase;