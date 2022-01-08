import React from 'react';
import { Avatar, Box } from '@material-ui/core';

type Props = {
    avatar: string
}

const MemberAvatar = ({avatar}: Props) => {
    return (
        <Box m={1}>
            <Avatar alt="Member" src={avatar} />
        </Box>
    )
}

export default MemberAvatar;
