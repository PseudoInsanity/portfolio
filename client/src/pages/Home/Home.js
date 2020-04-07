import makeStyles from '@material-ui/core/styles/makeStyles';
import Image from '../../img/flower_background.jpg';

const useStyles =  makeStyles((theme) => ({
    background: {
        height: 'calc(100vh + 53px)',
        background: `url(${Image})`,
        backgroundSize: '100%',
    }
}));

export {useStyles};