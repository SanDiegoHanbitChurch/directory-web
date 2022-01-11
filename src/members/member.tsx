import React from 'react';
import { Box } from '@material-ui/core';
import MemberAvatar from './memberAvatar';
import Name from './name';
import Phone from './phone';
import Email from './email';
import MemberCard from './memberCard';

type Props = {
    member : {
        name: string,
        avatar: string,
        phone: string,
        email: string,
    }

}

const Member = ({member}: Props) => {

    const {
        name,
        avatar,
        phone,
        email
     } = member

    return (
        <Box display="flex" flexDirection="row" justifyContent="center" m={3}>
            <MemberCard name={name} avatar={avatar} phone={phone} email={email} />
        </Box>
    )
}

export default Member;
