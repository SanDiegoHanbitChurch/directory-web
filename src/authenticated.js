import React from 'react';
import MembersContainer from './members';
import HanbitLogo from './assets/hanbitLogo.svg';
import { Box } from '@material-ui/core';

const Authenticated = () => {
    return (
        <div>
            <Box display='flex' justifyContent='center'>
                <img src={HanbitLogo} alt="HanbitLogo" />
            </Box>
            <MembersContainer />
        </div>
    )
}

export default Authenticated;
