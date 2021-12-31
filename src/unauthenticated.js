import React from 'react';
import GoogleButton from 'react-google-button'

const Unauthenticated = ({login}) => {
    return (
        <GoogleButton onClick={login} variant="contained" color="secondary" />
    )
}

export default Unauthenticated;
