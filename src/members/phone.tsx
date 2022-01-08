import React from 'react';
import { Typography, Box } from '@material-ui/core';

type Props = {
    phone: string
}

const Phone = ({phone}: Props) => {
    return (
        <Box p={2}>
            <Typography>{phone}</Typography>
        </Box>
    )
}

export default Phone;
