import React from 'react';
import { Typography, Box } from '@material-ui/core';

type Props = {
    address: {
        street: string,
        city: string,
        state: string,
        zip: string,
    }
}

const Address = ({address}: Props) => {
    return (
        <Box p={2}>
            <Typography>{address.street}</Typography>
            <Typography>{address.city} {address.state} {address.zip}</Typography>
        </Box>
    )
}

export default Address;
