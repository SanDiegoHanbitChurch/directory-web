import React from "react";
import { Button, Box } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

type Props = {
  onClick: () => void;
};

const BackButton = ({ onClick }: Props) => (
  <Box m={5}>
    <Button variant="contained" color="primary" onClick={onClick}>
      Previous Page
      <NavigateBeforeIcon />
    </Button>
  </Box>
);

export default BackButton;
