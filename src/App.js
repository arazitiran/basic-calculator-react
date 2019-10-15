import React, { Component } from 'react';
import logo from './logo.svg';
import './components_css/App.css';
import Calculator from './components/Calculator'
import { AppBar, Toolbar, Typography, CssBaseline } from '@material-ui/core';
import indigo from '@material-ui/core/colors/indigo'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="relative" backgroundColor="#2196f3">
                    <Toolbar>
                        <img src="https://img.icons8.com/pastel-glyph/50/000000/calculator.png" />
                        <Typography variant="h6" color="inherit" noWrap> Tiran's Calculator  </Typography>
                    </Toolbar>
                </AppBar>
            <div className="App" >
                <header className="App-header">
                    <Calculator />
                    </header>
                    <footer>
                        <Typography variant="h6" align="center" >
                           THX FOR EVERYTHING BENCHUK
        </Typography>
                        <Typography variant="subtitle1" align="center" >
                          footer subtitle
        </Typography>
                    </footer>
            </div>
                </React.Fragment>);
    }
}

export default App;
