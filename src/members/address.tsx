import React from 'react';
import { Typography, Box } from '@material-ui/core';

type Props = {
    address?: {
        street: string,
        city: string, 
        state: string,
        zip: string,
    }
}

const Address = ({address}: Props) => {
    if (address == undefined) {
        return null
    }

    const {
        street,
        city,
        state,
        zip
    } = address;

    return (
        <Box p={2}>
            <Typography>{street}</Typography>
            <Typography>{city}, {state} {zip}</Typography>
        </Box>
    )
}

export default Address;
