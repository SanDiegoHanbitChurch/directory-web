import React from 'react';
import { Grid } from '@material-ui/core';
import Member from './member';

type MemberType = {
    id: string,
    name: string,
    avatar: string,
    phone: string,
    email: string,
    address: {
        street: string,
        city: string,
        state: string,
        zip: string,
    }
};

type Props = {
    members: MemberType[]
}

const renderMember = (member: MemberType) => {
    return (
        <Grid item xs={6} sm={4} md={3} lg={2}>
            <Member key={member.id} member={member} />
        </Grid>
    )
}

const Members = ({members}: Props) => {
    return (
        <Grid container spacing={3}>
            { members.map(renderMember)}
        </Grid>
    )
}

export default Members;
