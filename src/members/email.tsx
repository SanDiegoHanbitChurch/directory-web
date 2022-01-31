import React from "react";
import { Box, Typography, Link } from "@material-ui/core";

type Props = {
  email: string;
  onClick: () => void;
};

const Email = ({ email, onClick }: Props) => (
  <Link onClick={onClick}>
    <Box display="flex" justifyContent="center" p={1}>
      <Typography variant="body1" className="CardText" component="span">
        {email}
      </Typography>
    </Box>
  </Link>
);

export default Email;
