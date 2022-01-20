import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import { IconButton, Box } from "@material-ui/core";

type Props = {
  onClick: () => void;
  disabled: boolean;
};

const ClearButton = ({ onClick, disabled }: Props) => (
  <Box>
    <IconButton color="primary" disabled={disabled} onClick={onClick}>
      <ClearIcon />
    </IconButton>
  </Box>
);

export default ClearButton;
