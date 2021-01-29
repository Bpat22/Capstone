import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';


const useStyle = makeStyles((theme) => ({
    root:{
        flefGrow: 1,
        '& > svg':{
            margin: theme.spacing(2),
        }
    },
    container: {
        display: 'flex',
        flexGrow: 1,
    },
    button: {
        border: '1px solid black',
        borderRadius: '5px',
        padding: '0px 5px',
        aligncontent: 'space-between'
    }

}))

function HomeIcon(props){
    return(
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const Header = () => {
    const classes = useStyle();

    return (
        <AppBar position = 'sticky'>
            <div className={classes.root}>
            <Toolbar>
                <HomeIcon />
                <div className={classes.container}>
                <Typography variant = 'overline' className={classes.container}>
                    <Link to = '/home'>Home</Link>
                </Typography>
                <Typography variant = 'overline' className={classes.container}>
                    <Link to = '/about'>About Us</Link>
                </Typography>
                <Typography variant = 'overline' className={classes.container}>
                    <Link to = '/contact'>Contact Us</Link>
                </Typography>
                </div>
                <div className={classes.button}>
                <Typography variant = 'overline'>
                    <Link to = '/login'>LogIn</Link>                    
                </Typography>
                </div>
                <div className={classes.button}>
                <Typography variant = 'overline'>
                    <Link to = '/register'>Register</Link>
                </Typography>
                </div>
            
            </Toolbar>
            </div>
        </AppBar>
    )

}
export default Header;