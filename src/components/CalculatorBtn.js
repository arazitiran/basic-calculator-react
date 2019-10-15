import React from 'react';
import { Button,  makeStyles } from '@material-ui/core';

let CalculatorBtn = ({ btnvalue, onBtnClick}) => {

    const useStyles = makeStyles(theme => ({
        btnStyle: {
            
        }
    }));

    const classes = useStyles();
   
    return (
        <Button variant="contained" color="primary" btnval={btnvalue} className={classes.btnStyle} onClick={onBtnClick}>
            {btnvalue}
        </Button> 
  );
}

export default CalculatorBtn;
