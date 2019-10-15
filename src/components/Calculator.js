import React, { useState } from 'react';
import '../components_css/Calculator.css';
import CalculatorBtn from './CalculatorBtn';
import { Container, Grid, Typography,Paper, Box , makeStyles  } from '@material-ui/core';
import * as mathi from 'mathjs';

let Calculator = (props) => {

    // State
    const [input, setInput] = useState(0);

    // Arrays
    let btns_numbers = [];
    var btns_operators = ['+', '-', '/', '*', '=', 'cc'];
    let box_items = [];

    // Hooked-styles: 
    const useStyles = makeStyles(theme => ({
        boxGrow: {
            maxWidth: 300,
        },
        boxChildsButtons: {
        },
        calculator: {
            background: theme.palette.secondary.main,
            width: '80%',
            margin: 0,
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        inputPaper :{
            width: '90%',
            margin: 0,
            marginRight: 'auto',
            marginLeft: 'auto',
        },
    }));
    const classes = useStyles();

    // Handle Clicks at buttnos
    //Q : why it only works with getAttribute and not without? should work without
    const handleClicks = event => {
        let firstInput = input.toString().substring(0, 1);
        (firstInput == 0)? setInput(parseInt(event.currentTarget.getAttribute('btnval'))) : setInput(input + "" + event.currentTarget.getAttribute('btnval'));
    }

    // Handle click at '='
    const handleEqual = () => {
        setInput(mathi.evaluate(input));
        console.log(input);
    }

    // Define numbers buttons
    for (var i = 0; i < 10; i++) {
        btns_numbers.push(<CalculatorBtn key={'btn' + i} btnvalue={i} onBtnClick={handleClicks} />);
    }

    // Wrapping numbers buttons in boxes
    box_items = btns_numbers.map(btn => {
        return <Box p={1} width="26%" key={btn.key} className={classes.boxChildsButtons}> {btn} </Box >
    });

    // Define operators buttons and wrapping in boxes
    box_items.push(btns_operators.map(item => {
        switch (item) {
            case '=':
                return <Box p={1} width="35%" key={'btn-operator-' + item.indexOf(item)} className={classes.boxChildsButtons}> <CalculatorBtn key={'btn-operator-' + item.indexOf(item)} btnvalue={item} onBtnClick={handleEqual} />  </Box >
            case 'cc':
                return <Box p={1} width="35%" key={'btn-operator-' + item.indexOf(item)} className={classes.boxChildsButtons}> <CalculatorBtn key={'btn-operator-' + item.indexOf(item)} btnvalue={"CC"} onBtnClick={() => setInput(0)} />  </Box >
            default: 
                return <Box p={1} width="35%" key={'btn-operator-' + item.indexOf(item)} className={classes.boxChildsButtons}> <CalculatorBtn key={'btn-operator-' + item.indexOf(item)} btnvalue={item} onBtnClick={handleClicks} />  </Box >
        }
    }));

    return (
        <Container maxWidth="md" >
            <Grid container justify="center" spacing={3} className={classes.calculator}>
                <Grid item xs={12}>
                    <Box> My calculator  </Box>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.inputPaper}> <Box> <Typography variant="h3" children="blabla" > {input}  </Typography> </Box> </Paper>
                </Grid>
                <Grid justify="center" item >
                    <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" flexDirection="row" className={classes.boxGrow}>
                        {box_items.slice(0,10)}
                    </Box>
                </Grid>
                <Grid item >
                    <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" flexDirection="row" className={classes.boxGrow}>
                        {box_items.slice(10,14)}
                    </Box>
                </Grid>
            </Grid>
        </Container>);

}



export default Calculator;