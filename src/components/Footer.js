import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import { TableFooter } from "@material-ui/core";
import ContactsIcon from "@material-ui/icons/Contacts";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Merit Bank
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minLenght: "100vh",
  },
  footer: {
    padding: theme.spacing(1, 2),
    marginTop: "auto",
     position:"fixed",
left:0,
bottom:0,
right:0,
      backgroundColor: "rbg(65,83,173)"
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <div className={classes.root}>
        <CssBaseline />

        <footer className={classes.footer} id="foot">
          <Container maxWidth="sm">
            <Toolbar>
              <Typography variant="h7" className={classes.title}>
                <Link to="home">Home</Link>
              </Typography>
              <Typography variant="h7" className={classes.title}>
                <Link to="home">Terms</Link>
              </Typography>
              <Typography variant="h7" className={classes.title}>
                <Link to="home">Privacy</Link>
              </Typography>
              <Typography variant="h7" className={classes.title}>
                <Link to="about">About Us</Link>
              </Typography>
              <Typography variant="h7" className={classes.title}>
                <Link to="contact">Contact Us</Link>
              </Typography>
            </Toolbar>

            <Typography variant="h7" className={classes.title}>
              <Link to="contact">Main Office</Link>
              <address>
                123, Main Street <br /> Dallas, TX <br /> USA <br />
                Phone 123-456-7890 <br /> Fax 123-456-7891 <br />
                <a href="mailto:meritbank.com">meritbank.com</a>
              </address>
            </Typography>

            <div class="followus footer-divider">
              <span class="followus--text">Follow us:</span>

              <a
                class="FacebookIcon"
                target="_blank"
                rel="noopener"
                href="https://www.facebook.com/meritbank"
              >
                <IconButton color="secondary" aria-label="add facebook">
                  <FacebookIcon />
                </IconButton>
              </a>

              <a
                class="YouTubeIcon"
                target="_blank"
                rel="noopener"
                href="https://www.youtube.com/meritbank"
              >
                <IconButton color="secondary" aria-label="add youtube">
                  <YouTubeIcon />
                </IconButton>
              </a>

              <a
                class="PinterestIcon"
                target="_blank"
                rel="noopener"
                href="https://www.pinterest.com/meritbank"
              >
                <IconButton color="secondary" aria-label="add pinterest">
                  <PinterestIcon />
                </IconButton>
              </a>

              <a
                class="LinkedInIcon"
                target="_blank"
                rel="noopener"
                href="https://www.linked.com/meritbank"
              >
                <IconButton color="secondary" aria-label="add linkedin">
                  <LinkedInIcon />
                </IconButton>
              </a>
            </div>
            <Box mt={1}>
              <Copyright />
            </Box>
          </Container>
        </footer>
      </div>
    </AppBar>
  );
}
// export default Footer;
