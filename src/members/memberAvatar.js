import React from 'react';
import { Avatar, Box } from '@material-ui/core';


const MemberAvatar = ({avatar}) => {
    return (
        <Box m={1}>
            <Avatar alt="Member" src={avatar} />
        </Box>
    )
}

export default MemberAvatar;
