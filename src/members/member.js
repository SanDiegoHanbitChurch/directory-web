import React from 'react';
import { Box } from '@material-ui/core';
import MemberAvatar from './memberAvatar';
import Name from './name';
import Phone from './phone';
import Email from './email';

const Member = ({member}) => {

    const {
        name,
        avatar,
        phone,
        email
     } = member

    return (
        <Box display="flex" flexDirection="row" justifyContent="center" m={3}>
            <MemberAvatar avatar={avatar}/>
            <Name name={name}/>
            <Phone phone={phone}/>
            <Email email={email}/>
        </Box>
    )
}

export default Member;
