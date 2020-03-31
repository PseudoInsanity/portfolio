import React from 'react';
import { useStyles } from './Projects.js';
import TopBar from '../../components/TopBar/TopBar.jsx';


const Projects = () => {
    const classes = useStyles();

    return (
        <div className={classes.background} id="projects">
            <TopBar/>
        </div>
    )
}

export default Projects;