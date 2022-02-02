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
    <Box p={2} display="flex" flexDirection="column">
      <Link onClick={onClick} color="secondary" component="button">
        <div>
          <Typography variant="body1" className="Text" component="span">
            {street}
          </Typography>
        </div>
        <div>
          <Typography variant="body1" className="Text" component="span">
            {city}, {state} {zip}
          </Typography>
        </div>
      </Link>
    </Box>
  );
};

export default Address;
