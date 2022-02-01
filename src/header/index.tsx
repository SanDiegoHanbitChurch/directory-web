import React from "react";
import { Box } from "@material-ui/core";
import LogoutButton from "./logoutButton";
import UserAvatar from "./userAvatar";
import ModeToggle from "./modeToggle";
import HomeButton from "./homeButton";

type Props = {
  logout: () => void;
  user: {
    displayName: string;
    email: string;
    photoURL: string;
    accessToken: string;
  };
};

const HeaderContainer = ({ logout, user }: Props) => {
  const handleOnRefresh = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      m={1}
    >
      <UserAvatar user={user} />
      <ModeToggle />
      <Box display="flex" flexDirection="row">
        <HomeButton onClick={handleOnRefresh} />
        <LogoutButton logout={logout} />
      </Box>
    </Box>
  );
};

export default HeaderContainer;
