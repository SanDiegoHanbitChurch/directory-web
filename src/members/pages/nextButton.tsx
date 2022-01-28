import React from "react";
import { Button, Box } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

type Props = {
  onClick: () => void;
};

const NextButton = ({ onClick }: Props) => (
  <Box m={5}>
    <Button color="secondary" variant="outlined" onClick={onClick}>
      <NavigateNextIcon fontSize="large" />
    </Button>
  </Box>
);

export default NextButton;
