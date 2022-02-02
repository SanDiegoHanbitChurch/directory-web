import React from "react";
import { Box, Typography, Link } from "@material-ui/core";

type Props = {
  email: string;
  onClick: () => void;
};

const Email = ({ email, onClick }: Props) => (
  <Box display="flex" justifyContent="center" p={1}>
    <Link onClick={onClick} color="secondary" component="button">
      <Typography variant="body1" className="Text" component="span">
        {email}
      </Typography>
    </Link>
  </Box>
);

export default Email;
