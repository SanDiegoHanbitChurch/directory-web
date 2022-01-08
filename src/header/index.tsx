import React from 'react';
import { Box } from '@material-ui/core';
import LogoutButton from './logoutButton';
import UserAvatar from './userAvatar';

type Props = {
    logout: () => void;
    user: {
        displayName: string,
        email: string,
        accessToken: string
    };
}

const HeaderContainer = ({logout, user}: Props) => {
    return (
        <Box display='flex' flexDirection='row' justifyContent='space-between' m={1}>
            <UserAvatar user={user}/>
            <LogoutButton logout={logout}/>
        </Box>
    )
}

export default HeaderContainer;
