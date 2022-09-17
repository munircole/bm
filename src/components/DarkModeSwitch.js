import { useStateContext } from '../context/state';

import { IconButton } from '@material-ui/core';
import { useNavStyles } from '../styles/muiStyles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const DarkModeSwitch = () => {
  const { darkMode, toggleDarkMode } = useStateContext();
  const classes = useNavStyles();

  return (
    <IconButton
      color="primary"
      onClick={() => toggleDarkMode()}
      className={classes.iconBtn}
    >
      {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default DarkModeSwitch;
