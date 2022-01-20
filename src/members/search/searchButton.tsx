import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton, Box } from "@material-ui/core";

type Props = {
  disabled: boolean;
  onClick: () => void;
};

const SearchButton = ({ disabled, onClick }: Props) => (
  <Box>
    <IconButton color="primary" disabled={disabled} onClick={onClick}>
      <SearchIcon />
    </IconButton>
  </Box>
);

export default SearchButton;
