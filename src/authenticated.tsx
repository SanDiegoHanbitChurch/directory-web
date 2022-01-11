import React from 'react';
import MembersContainer from './members';
import HanbitLogo from './assets/hanbitLogo.svg';
import { Box } from '@material-ui/core';
import HeaderContainer from './header';

type Props = {
    logout: () => void;
    user: {
        displayName: string,
        email: string,
        accessToken: string
    }
}

const Authenticated = ({logout, user}: Props) => {
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