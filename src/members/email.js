import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Email = ({email}) => {
    return (
        <Box p={2}>
            <Typography>{email}</Typography>
        </Box>
    )
}

export default Email;
