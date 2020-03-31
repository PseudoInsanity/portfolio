import makeStyles from '@material-ui/core/styles/makeStyles';
import BackgroundImage from '../../img/flower_background.jpg';


const useStyles = makeStyles((theme) => ({
    avatar: {
      margin: theme.spacing(3),
    },
    text: {
        color: theme.palette.primary.light,
        padding: theme.spacing(1),
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
      },
    title: {
        color: theme.palette.primary.light
    },
    background: {
        position: 'absolute',
        backgroundImage: `url(${BackgroundImage})`,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: '1000px'
    }

}));

export { useStyles };