import React from 'react';
import { List } from '@material-ui/core';
import Member from './member';

type Member = {
    id: string,
    name: string,
    avatar: string,
    phone: string,
    email: string,
};

type Props = {
    members: Member[]
}

const renderMember = (member: Member) => {
    return (
        <Member key={member.id} member={member} />
    )
}

const Members = ({members}: Props) => {
    return (
        <List>
            { members.map(renderMember)}
        </List>
    )
}

export default Members;
