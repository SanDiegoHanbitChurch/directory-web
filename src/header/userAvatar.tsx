import React from 'react';
import { Typography, Box } from '@material-ui/core';

type Props = {
    user: {
        displayName: string,
        email: string,
        accessToken: string
    }
}

const UserAvatar = ({user}: Props) => {
    return (
        <Box m={3}>
            <Typography>
                {user.displayName}
            </Typography>
        </Box>
    )
}

export default UserAvatar;
