import React from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

type Props = {
  onClick: () => void;
};

const useStyles = makeStyles(() => ({
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
}));

const NextButton = ({ onClick }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fab
        onClick={onClick}
        aria-label="add"
        size="large"
        color="secondary"
        variant="extended"
      >
        <NavigateNextIcon fontSize="large" />
      </Fab>
    </div>
  );
};
export default NextButton;
