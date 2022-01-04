import React, { useEffect, useState } from 'react';
import Members from './members';
import axios from 'axios';

const MembersContainer = ({user}) => {
    const [members, setMembers] = useState([]);

    console.log('members index user', user)

    useEffect(() => {
        const url='https://us-central1-hanbit-directory-dev.cloudfunctions.net/v1/members';
        const options = {
            headers: {
                Authorization: `Bearer ${user.accessToken}`
            }
        }
        console.log('options', options)
        axios.get(url, options)
            .then((response) => {
                // handle success
                setMembers(response.data);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .finally(() => {
                // always executed
            });
    }, []);

    return (
        <Members members={members}/>
    )
}

export default MembersContainer;
