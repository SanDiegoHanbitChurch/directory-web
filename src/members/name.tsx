import React from 'react';
import { Box, Typography } from '@material-ui/core';

type Props = {
    name: string
}

const Name = ({name}: Props) => {
    return (
        <Box p={2}>
            <Typography>{name}</Typography>
        </Box>
    )
}

export default Name;
