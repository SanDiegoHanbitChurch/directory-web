import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Name = ({name}) => {
    return (
        <Box p={2}>
            <Typography>{name}</Typography>
        </Box>
    )
}

export default Name;
