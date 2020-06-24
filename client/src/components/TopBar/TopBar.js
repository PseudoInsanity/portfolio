import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        borderBottom: '3px solid #253841',
        '& > *': {
            display: 'flex',
            alignContent: 'space-evenly',
            margin: theme.spacing(1),
        }
        ,
        appbar: {
            top: 'auto',
            bottom: 0,
            left: 0,
            width: '100%',
            zIndex: 99,
        }
    }

}));

export { useStyles };