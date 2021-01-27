import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    },
    menuButton: {
    marginLeft: theme.spacing(2),
    },
    title: {
    flexGrow: 1,
    },
    
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
        <Box mt={8}>
            <Copyright />
        
        </Box>
            <Typography variant="h7" className={classes.title}>
            Terms change
            </Typography>
            <Typography variant="h7" className={classes.title}>
            Privacy
            </Typography>
            <Typography variant="h7" className={classes.title}>
            <Link to = 'about' >
            About Us
            </Link>
            </Typography>
            <Typography variant="h7" className={classes.title}>
            <Link to = 'contact' >
            Contact Us
            </Link>
            </Typography>
        </Toolbar>
        </AppBar>
    </div>
    );
}