import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        '& > *': {
            display: 'flex',
            alignContent: 'space-evenly',
            margin: theme.spacing(1),
        },
    }

}));

export { useStyles };