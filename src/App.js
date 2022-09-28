import NavBar from './components/NavBar';
import Footer from './pages/footer/footer'
import ToastNotification from './components/ToastNotification';
import Routes from './pages/Routes';
import { useStateContext } from './context/state';

import customTheme from './styles/customTheme';
import { useBodyStyles } from './styles/muiStyles';
import { Paper } from '@material-ui/core/';
import { ThemeProvider } from '@material-ui/core/styles';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ScrollToTop from './components/scrollToTop';

const App = () => {
  const { darkMode } = useStateContext();
  const classes = useBodyStyles();

  return (
    <ThemeProvider theme={customTheme(darkMode)}>
      <Paper className={classes.root} elevation={0}>
        <ScrollToTop/>
        <ToastNotification />
        <NavBar />
        <Routes />
        <Footer/>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
