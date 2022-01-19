import React from 'react';
import { Box, Typography } from '@material-ui/core';

type Props = {
    name: string
}

const Name = ({name}: Props) => {
    return (
        <Box display='flex' justifyContent='center' p={1}>
            <Typography gutterBottom component="h2">{name}</Typography>
        </Box>
    )
}

export default Name;
