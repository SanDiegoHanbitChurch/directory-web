import React from "react";
import { Typography, Box, Link } from "@material-ui/core";

type Props = {
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  onClick: () => void;
};

const Address = ({ address, onClick }: Props) => {
  if (address === undefined) {
    return null;
  }

  const { street, city, state, zip } = address;

  return (
    <Link onClick={onClick} component="button">
      <Box p={2} display="flex" flexDirection="column">
        <Typography variant="body1" color="textSecondary" component="span">
          {street}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="span">
          {city}, {state} {zip}
        </Typography>
      </Box>
    </Link>
  );
};

export default Address;
