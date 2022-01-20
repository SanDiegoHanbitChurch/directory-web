import React, { useState } from "react";
import {
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

type Props = {
  logout: () => void;
};

const LogoutButton = ({ logout }: Props) => {
  const [openState, setOpenState] = useState(false);

  const handleOnOpen = () => {
    setOpenState(true);
  };

  const handleOnClose = () => {
    setOpenState(false);
  };

  return (
    <Box m={1}>
      <IconButton onClick={handleOnOpen}>
        <ExitToAppIcon fontSize="large" />
      </IconButton>
      <Dialog open={openState} onClose={handleOnClose}>
        <DialogTitle>Are you sure you want to log out?</DialogTitle>
        <DialogActions>
          <Box display="flex" justifyContent="space-between" p={1}>
            <Button onClick={logout}>Logout</Button>
            <Button onClick={handleOnClose}>Cancel</Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default LogoutButton;
