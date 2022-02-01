import React from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
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
      right: "auto",
      bottom: 20,
      left: 20,
      position: "fixed",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const BackButton = ({ onClick }: Props) => {
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
        <NavigateBeforeIcon fontSize="large" />
      </Fab>
    </div>
  );
};
export default BackButton;
