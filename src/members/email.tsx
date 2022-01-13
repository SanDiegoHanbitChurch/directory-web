import React from 'react';
import { Box, Typography } from '@material-ui/core';

type Props = {
    email: string
}

const Email = ({email}: Props) => {
    return (
        <Box display='flex' justifyContent='center' p={1}>
            <Typography>{email}</Typography>
        </Box>
    )
}

export default Email;
