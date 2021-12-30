import React from 'react';
import Avatar from './avatar';
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
        <>
            <Name name={name}/>
            <Avatar avatar={avatar}/>
            <Phone phone={phone}/>
            <Email email={email}/>
        </>
    )
}

export default Member;
