import React from 'react';
import { Grid } from '@material-ui/core';
import Member from './member';
import { MemberType } from '../types'

type Props = {
    members: MemberType[]
}

const renderMember = (member: MemberType) => {
    return (
        <Grid item xs={6} sm={4} md={3}>
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
