import { List } from '@material-ui/core';
import React from 'react';
import Member from './member';

const renderMember = (member) => {
    return (
        <Member member={member} />
    )
}

const Members = ({members}) => {

    return (
        <List>
            { members.map((member) => {return renderMember(member)})}
        </List>
    )
}

export default Members;
