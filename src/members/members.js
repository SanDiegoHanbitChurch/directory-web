import React from 'react';
import { List } from '@material-ui/core';
import Member from './member';

const renderMember = (member) => {
    return (
        <Member key={member.id} member={member} />
    )
}

const Members = ({members}) => {

    return (
        <List>
            { members.map(renderMember)}
        </List>
    )
}

export default Members;
