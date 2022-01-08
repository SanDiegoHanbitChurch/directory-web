import React from 'react';
import { List } from '@material-ui/core';
import MemberType from './member';

type MemberType = {
    id: string,
    name: string,
    avatar: string,
    phone: string,
    email: string,
};

type Props = {
    members: MemberType[]
}

const renderMember = (member: MemberType) => {
    return (
        <MemberType key={member.id} member={member} />
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
