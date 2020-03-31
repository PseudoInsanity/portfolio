import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles =  makeStyles((theme) => ({
    background: {
        height: '100vh',
        backgroundColor: theme.palette.secondary.main
    }
}));

export {useStyles};