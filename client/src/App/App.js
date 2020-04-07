import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    '@media (min-width: 300px && max-width:768px)': {
      minHeight: "48px"
    }
    
  },
}));

export { useStyles };



