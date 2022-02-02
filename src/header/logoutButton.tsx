import React, { useState } from "react";
import {
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  Typography,
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
        <ExitToAppIcon className="IconButton" fontSize="large" />
      </IconButton>
      <Dialog open={openState} onClose={handleOnClose}>
        <div className="LogoutDialog">
          <DialogTitle className="Text">
            Are you sure you want to log out?
          </DialogTitle>
          <DialogActions>
            <Box display="flex" justifyContent="space-between" p={1}>
              <Button onClick={logout}>
                <Typography className="Text" variant="subtitle2">
                  Logout
                </Typography>
              </Button>
              <Button onClick={handleOnClose}>
                <Typography className="Text" variant="subtitle2">
                  Cancel
                </Typography>
              </Button>
            </Box>
          </DialogActions>
        </div>
      </Dialog>
    </Box>
  );
};

export default LogoutButton;
