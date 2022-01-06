import React from 'react';
import MembersContainer from './members';
import HanbitLogo from './assets/hanbitLogo.svg';
import { Box } from '@material-ui/core';
import HeaderContainer from './header';

const Authenticated = ({logout, user}) => {
    return (
        <div>
            <HeaderContainer logout={logout} user={user} />
            <Box display='flex' justifyContent='center'>
                <img src={HanbitLogo} alt="HanbitLogo" />
            </Box>
            <MembersContainer user={user}/>
        </div>
    )
}

export default Authenticated;
