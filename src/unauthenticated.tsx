import React from 'react';
import GoogleButton from 'react-google-button'
import HanbitLogo from './assets/hanbitLogo.svg';
import { Box } from '@material-ui/core';

type Props = {
    login: () => void;
}

const Unauthenticated = ({login}: Props) => {
    return (
        <Box>
            <Box display='flex' justifyContent='center' m={10}>
                <img src={HanbitLogo} alt="HanbitLogo" />
            </Box>
            <Box display='flex' justifyContent='center' m={10}>
                <GoogleButton onClick={login} color="secondary" />
            </Box>
        </Box>
    )
}

export default Unauthenticated;
