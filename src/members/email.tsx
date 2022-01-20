import React from "react";
import { Box, Typography } from "@material-ui/core";

type Props = {
  email: string;
};

const Email = ({ email }: Props) => (
  <Box display="flex" justifyContent="center" p={1}>
    <Typography variant="body1" color="textSecondary" component="span">
      {email}
    </Typography>
  </Box>
);

export default Email;
