import React from "react";
import { Typography, Box, Link } from "@material-ui/core";

type Props = {
  phone: string;
  onClick: () => void;
};

const Phone = ({ phone, onClick }: Props) => (
  <Link onClick={onClick}>
    <Box display="flex" justifyContent="center" p={1}>
      <Typography variant="body1" color="textSecondary" component="span">
        {phone}
      </Typography>
    </Box>
  </Link>
);

export default Phone;
