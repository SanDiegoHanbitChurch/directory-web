import React from 'react';
import { Box } from '@material-ui/core';
import LogoutButton from './logoutButton';
import UserAvatar from './userAvatar';

const HeaderContainer = ({logout, user}) => {
    return (
        <Box display='flex' flexDirection='row' justifyContent='space-between' m={1}>
            <UserAvatar user={user}/>
            <LogoutButton logout={logout}/>
        </Box>
    )
}

export default HeaderContainer;
