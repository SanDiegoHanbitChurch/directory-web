import React from "react";
import GoogleButton from "react-google-button";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Link,
  CssBaseline,
  Paper,
  Grid,
  Avatar,
  Typography,
} from "@material-ui/core";
import HanbitLogo from "./assets/hanbitLogo.svg";

type Props = {
  login: () => void;
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://www.orbcfamily.org/site/wp-content/uploads/2019/04/Depositphotos_225669932_s-2019.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

const Unauthenticated = ({ login }: Props) => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Box display="flex" justifyContent="center" m={2}>
            <img src={HanbitLogo} alt="HanbitLogo" />
          </Box>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <form className={classes.form} noValidate>
            <Box display="flex" justifyContent="center" m={5} p={5}>
              <GoogleButton onClick={login} color="secondary" />
            </Box>
            <Box display="flex" justifyContent="center" m={1} p={1}>
              <Link
                href="https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp"
                color="secondary"
                variant="body2"
              >
                Don't have a Google account? Sign up!
              </Link>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Unauthenticated;
