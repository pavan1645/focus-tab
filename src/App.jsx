import React from 'react';
import './App.css';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import Clock from './Clock/Clock';
import Timer from './Timer/Timer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#fafafa',
      dark: '#c7c7c7',
      contrastText: '#fff',
    },
    secondary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#000',
    },
  },
});

const styles = {
  container: {
    display: 'flex',
    height: '100%',
  },
  containerItem: {
    width: '33.33%',
  },
};

function App() {
  const { container, containerItem } = styles;

  return (
    <ThemeProvider theme={theme}>
      <BackgroundImage />
      <div style={container}>
        <div style={containerItem}></div>
        <div style={containerItem}>
          <Clock />
          <Timer />
        </div>
        <div style={containerItem}></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
