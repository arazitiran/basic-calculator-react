import React, { Component } from 'react';
import logo from './logo.svg';
import './components_css/App.css';
import Calculator from './components/Calculator'
import { AppBar, Toolbar, Typography, CssBaseline } from '@material-ui/core';

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                        <img src="https://img.icons8.com/pastel-glyph/50/000000/calculator.png" />
                        <Typography variant="h6" color="inherit" noWrap> Tiran's Calculator  </Typography>
                    </Toolbar>
                </AppBar>
            <div className="App" >
                <header className="App-header">
                    <Calculator />
                </header>
            </div>
                </React.Fragment>);
    }
}

export default App;
