import React, { useEffect, useState } from 'react';
import Members from './members';
import { getMembers } from '../api/getMembers';

const MembersContainer = ({user}) => {
    const [membersState, setMembers] = useState([]);
  
    useEffect(() => {
       const fetchData = async (user) => {
            const members =  await getMembers(user);
            setMembers(members)
        };
        fetchData(user)
    }, [user]);

    return (
        <Members members={membersState}/>
    )
}

export default MembersContainer;
