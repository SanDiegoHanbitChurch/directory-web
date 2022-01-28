import React from "react";
import { Button, Box } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

type Props = {
  onClick: () => void;
};

const BackButton = ({ onClick }: Props) => (
  <Box m={5}>
    <Button color="secondary" variant="outlined" onClick={onClick}>
      <NavigateBeforeIcon fontSize="large" />
    </Button>
  </Box>
);

export default BackButton;
