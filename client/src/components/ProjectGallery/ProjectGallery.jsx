import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
import Zoom from 'react-reveal';
import { useStyles, tileData } from './ProjectGallery.js';
import Paper from '@material-ui/core/Paper';



const ProjectGallery = ({ title }) => {
    const classes = useStyles();
    return (
        <Paper elevation={1} className={classes.paper}>
            <Grid container item justify="center" className={classes.grid} xs={12}>
                <Typography variant="h5">{title}</Typography>
            </Grid>
            <Zoom bottom cascade >
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                titlePosition="top"
                                className={classes.titleBar}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </Zoom>
        </Paper>
    );
}

export default ProjectGallery;