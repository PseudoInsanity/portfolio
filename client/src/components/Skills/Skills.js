import { makeStyles, lighten, withStyles } from '@material-ui/core/styles/';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles((theme) => ({
    paper: {
        background: theme.palette.secondary.light,
        height: '650px',
        width: '65%'
    },
    grid: {
        display: 'flex',
        justifyContent: 'center'
    },
    bodyGrid: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'flex-end',
        paddingLeft: '10px'
    },
    title: {
        margin: theme.spacing(1),
        color: theme.palette.primary.main
    },
    skill: {
        paddingLeft: '8px',
        color: theme.palette.primary.main
    },
    bars: {
        width: '80%',
    },
    margin: {
        marginLeft: theme.spacing(1),
    },

}));


const BorderLinearProgress = withStyles({
    root: {
        width: 500,
        height: 25,
        borderRadius: 10,
        backgroundColor: lighten('#ff6c5c', 0.5),
    },
    bar: {
        borderRadius: 10,
        backgroundColor: '#ff6c5c'
    },
})(LinearProgress);

const SKILLS = [
    { type: "Java", level: 90 },
    { type: "HTML", level: 60 },
    { type: "React", level: 40 },
    { type: "Javascript", level: 45 },
    { type: "Git", level: 65 },
    { type: "Android", level: 70 },
];

export { useStyles, SKILLS, BorderLinearProgress };