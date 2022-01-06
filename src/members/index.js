import React, { useEffect, useState } from 'react';
import Members from './members';
import { getMembers } from '../api/getMembers';

const MembersContainer = ({user}) => {
    const [members, setMembers] = useState([]);
  
    useEffect(() => {
       const fetchData = async (user) => {
            const foo =  await getMembers(user);
            setMembers(foo)
        };
        fetchData(user)
    }, [user]);

    console.log('members', members)
  
    return (
        <Members members={members}/>
    )
}

export default MembersContainer;
