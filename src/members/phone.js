import React from 'react';
import { Typography, Box } from '@material-ui/core';

const Phone = ({phone}) => {
    return (
        <Box p={2}>
            <Typography>{phone}</Typography>
        </Box>
    )
}

export default Phone;
