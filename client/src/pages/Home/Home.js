import makeStyles from '@material-ui/core/styles/makeStyles';
import Image from '../../img/flower_background.jpg';

const useStyles =  makeStyles((theme) => ({
    background: {
       
        background: `url(${Image})`,
        backgroundSize: '100%',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: '100vh'
    }
}));

export {useStyles};