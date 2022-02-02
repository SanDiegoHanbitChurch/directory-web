import React from "react";
import { Typography, Box, Link } from "@material-ui/core";

type Props = {
  phone: string;
  onClick: () => void;
};

const Phone = ({ phone, onClick }: Props) => (
  <Box display="flex" justifyContent="center" p={1}>
    <Link onClick={onClick} color="secondary" component="button">
      <Typography variant="body1" className="Text" component="span">
        {phone}
      </Typography>
    </Link>
  </Box>
);

export default Phone;
