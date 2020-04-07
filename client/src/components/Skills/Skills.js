import { makeStyles, lighten, withStyles } from '@material-ui/core/styles/';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.light,
        height: '650px',
        width: '65%'
    },
    grid: {
        justifyContent: 'center'
    },
    bodyGrid: {
    },
    title: {
        margin: theme.spacing(1),
        color: theme.palette.primary.light
    },
    skill: {
        paddingLeft: '8px',
    },
    bars: {
        width: '80%',
    },
    margin: {
        marginLeft: theme.spacing(1),
    },

}));


const BorderLinearProgress = withStyles((theme) => ({
    root: {
        width: '100%',
        height: 31,
        borderRadius: 2,
        backgroundColor: lighten(theme.palette.secondary.main, 1),

    },
    bar: {
        borderRadius: 2,
        backgroundColor: lighten(theme.palette.secondary.main, 0.5)
    },
}))(LinearProgress);

const skills = [
    { type: "Java", level: 90 },
    { type: "HTML", level: 65 },
    { type: "Javascript", level: 50 },
    { type: "React", level: 40 },
    { type: "Git", level: 65 },
    { type: "Android", level: 70 },
];

export { useStyles, skills, BorderLinearProgress };