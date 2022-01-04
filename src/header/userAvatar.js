import React from 'react';
import { Typography, Box } from '@material-ui/core';

const UserAvatar = ({user}) => {
    return (
        <Box m={3}>
            <Typography>
                {user.displayName}
            </Typography>
        </Box>
    )
}

export default UserAvatar;
