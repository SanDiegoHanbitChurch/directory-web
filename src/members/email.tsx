import React from 'react';
import { Box, Typography } from '@material-ui/core';

type Props = {
    email: string
}

const Email = ({email}: Props) => {
    return (
        <Box display='flex' justifyContent='center' p={2}>
            <Typography>{email}</Typography>
            <Typography>Hello World</Typography>
        </Box>
    )
}

export default Email;
