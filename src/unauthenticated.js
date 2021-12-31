import React from 'react';
import GoogleButton from 'react-google-button'
import HanbitLogo from './assets/hanbitLogo.svg';
import { Box } from '@material-ui/core';


const Unauthenticated = ({login}) => {
    return (
        <Box>
            <Box display='flex' justifyContent='center' m={5}>
                <img src={HanbitLogo} alt="HanbitLogo" />
            </Box>
            <Box display='flex' justifyContent='center' m={10}>
                <GoogleButton onClick={login} variant="contained" color="secondary" />
            </Box>
        </Box>
    )
}

export default Unauthenticated;
