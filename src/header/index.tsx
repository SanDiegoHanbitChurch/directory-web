import React from "react";
import { Box } from "@material-ui/core";
import LogoutButton from "./logoutButton";
import UserAvatar from "./userAvatar";
import ModeToggle from "./modeToggle";

type Props = {
  logout: () => void;
  user: {
    displayName: string;
    email: string;
    photoURL: string;
    accessToken: string;
  };
};

const HeaderContainer = ({ logout, user }: Props) => (
  <Box display="flex" flexDirection="row" justifyContent="space-between" m={1}>
    <UserAvatar user={user} />
    <ModeToggle />
    <LogoutButton logout={logout} />
  </Box>
);

export default HeaderContainer;
