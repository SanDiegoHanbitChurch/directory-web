import React, { useEffect, useState } from 'react';
import Members from './members';
import { getMembers } from '../api/getMembers';

const MembersContainer = ({user}) => {
    const [members, setMembers] = useState([]);

    useEffect(async () => {
        const foo =  await getMembers(user);
        setMembers(foo)
    }, []);

    return (
        <Members members={members}/>
    )
}

export default MembersContainer;
