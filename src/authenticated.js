import React from 'react';
import MembersContainer from './members';
import HanbitLogo from './assets/hanbitLogo.svg';
import { Box, Button } from '@material-ui/core';

const Authenticated = ({logout, user}) => {
    console.log('Authenticated user', user)
    return (
        <div>
            <Box display='flex' justifyContent='center'>
                <img src={HanbitLogo} alt="HanbitLogo" />
            </Box>
            <Box display='flex' flexDirection='row-reverse' m={1}>
                <Button variant="contained" color="primary" onClick={logout}>
                    Logout
                </Button>
            </Box>
            <MembersContainer user={user}/>
        </div>
    )
}

export default Authenticated;
