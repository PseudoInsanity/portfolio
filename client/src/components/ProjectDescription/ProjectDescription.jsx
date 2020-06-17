import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from './ProjectDescription';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ProjectGallery from '../ProjectGallery/ProjectGallery.jsx';
import Slide from '@material-ui/core/Slide';
import esLogo from '../../img/es_logo.png'

const ProjectDescription = ({ logo, title, description, date, image }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        logo ? <Avatar src={logo} aria-label="logo" /> 
                        : <Avatar src={esLogo} aria-label="logo" />
                    }
                    title={title}
                    subheader={date}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded && image.length,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        disabled={!image.length}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded && image.length} timeout="auto" unmountOnExit>
                    <CardContent>
                        <ProjectGallery image={image} />
                    </CardContent>
                </Collapse>
            </Card>
        </Slide>
    );
}

export default ProjectDescription;