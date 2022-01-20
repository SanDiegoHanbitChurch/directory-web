import React from "react";
import GoogleButton from "react-google-button";
import { Box } from "@material-ui/core";
import HanbitLogo from "./assets/hanbitLogo.svg";

type Props = {
  login: () => void;
};

const Unauthenticated = ({ login }: Props) => (
  <Box>
    <Box display="flex" justifyContent="center" m={10}>
      <img src={HanbitLogo} alt="HanbitLogo" />
    </Box>
    <Box display="flex" justifyContent="center" m={10}>
      <GoogleButton onClick={login} color="secondary" />
    </Box>
  </Box>
);

export default Unauthenticated;
