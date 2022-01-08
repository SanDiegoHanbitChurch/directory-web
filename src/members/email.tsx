import React from 'react';
import { Box, Typography } from '@material-ui/core';

type Props = {
    email: string
}

const Email = ({email}: Props) => {
    return (
        <Box p={2}>
            <Typography>{email}</Typography>
        </Box>
    )
}

export default Email;
