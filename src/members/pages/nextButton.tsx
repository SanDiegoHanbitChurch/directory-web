import React from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

type Props = {
  onClick: () => void;
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: 0,
      top: "auto",
      right: 20,
      bottom: 20,
      left: "auto",
      position: "fixed",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const NextButton = ({ onClick }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fab
        onClick={onClick}
        color="secondary"
        aria-label="add"
        className="UploadButton"
        size="large"
        variant="extended"
      >
        <NavigateNextIcon fontSize="large" />
      </Fab>
    </div>
  );
};
export default NextButton;
