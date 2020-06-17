import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Zoom from 'react-reveal';
import { useStyles } from './ProjectGallery.js';



const ProjectGallery = ({ title, image }) => {
    const classes = useStyles();

    console.log(image)
    return (
        <>
            <Grid container item justify="center" className={classes.grid} xs={12}>
                <Typography variant="h5">{title}</Typography>
            </Grid>
            <Zoom bottom cascade >
                <GridList cellHeight={400} className={classes.gridList} cols={2}>
                    {image.map((tile, index) => (
                        !(tile.image) &&
                        <GridListTile key={index} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.img} />
                        </GridListTile>
                    ))}
                </GridList>
            </Zoom>
        </>
    );
}

export default ProjectGallery;