import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles =  makeStyles((theme) => ({
    
    title: {
        margin: theme.spacing(2),
        color: theme.palette.primary.light
    },
    background: {
        backgroundColor: theme.palette.secondary.main,
        height: '100vh',
    }
}));

export {useStyles};