import { makeStyles } from '@material-ui/core/styles';
import eppnList from '../../img/gallery/eppn_list.png'
import eppnStartPage from '../../img/gallery/eppn_startpage.png';
import magicMirror from '../../img/gallery/magic_mirror.jpeg';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        '&.MuiPaper-root': {
            backgroundColor: theme.palette.primary.main,
        },
        color: theme.palette.primary.light,
        height: '650px',
        width: '65%',
        "@media (max-width: 600px)": {
            width: "100%",
        }
    },
    gridList: {
        width: 600,
        height: 550,
        transform: 'translateZ(0)',
    },
}));


const tileData = [
    {
        img: eppnStartPage,
        title: 'EPPN Splashscreen',
        featured: false
    },
    {
        img: eppnList,
        title: 'EPPN StartPage',
        featured: false
    },
    {
        img: magicMirror,
        title: 'Magic Mirror',
        featured: false
    }
]

export { useStyles, tileData };