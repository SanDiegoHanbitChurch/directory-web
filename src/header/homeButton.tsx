import React from "react";
import { Box, IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

type Props = {
  onClick: () => void;
};

const HomeButton = ({ onClick }: Props) => (
  <Box m={1}>
    <IconButton onClick={onClick}>
      <HomeIcon className="IconButton" fontSize="large" />
    </IconButton>
  </Box>
);

export default HomeButton;
