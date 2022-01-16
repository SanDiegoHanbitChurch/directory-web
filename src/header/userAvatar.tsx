import React from 'react';
import { Typography, Box, Avatar } from '@material-ui/core';

type Props = {
    user: {
        displayName: string,
        email: string,
        photoURL: string,
        accessToken: string
    }
}

const UserAvatar = ({user}: Props) => {
    return (
        <Box m={1} display='flex' flexDirection='row' >
            <Box m={1}>
                <Avatar src={user.photoURL} alt='UserAvatar'/>
            </Box>
            <Box m={2}>
                <Typography>
                    {user.displayName}
                </Typography>
            </Box>
        </Box>
    )
}

export default UserAvatar;
