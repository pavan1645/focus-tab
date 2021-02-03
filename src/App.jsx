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

const IMAGE_URL = 'https://momentum.photos/img/d20ccc21-6d5a-4974-b60f-8d5fa513ad8e.jpg?momo_cache_bg_uuid=1c2056f8-3a6b-4ada-8da9-10ec31e4f1f5';

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
      <BackgroundImage imageUrl={IMAGE_URL} />
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
