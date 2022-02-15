import React from "react";
import { Box, Button } from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";

type Props = {
  user: {
    displayName: string;
    email: string;
    photoURL: string;
    accessToken: string;
  };
};

type MemberLocationType = {
  id: string;
  name: string;
  phone: string;
  email: string;
};

const MemberDetailsContainer = ({ user }: Props) => {
  const navigate = useNavigate();

  const location = useLocation();

  const { id, name, phone, email } = location.state as MemberLocationType;

  // eslint-disable-next-line no-console
  console.log(user);
  return (
    <Box m={2}>
      <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
        Go Back
      </Button>
      <ul>
        <li>{id}</li>
        <li>
          {name}, {phone}, {email}
        </li>
      </ul>
    </Box>
  );
};

export default MemberDetailsContainer;
