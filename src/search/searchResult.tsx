import React from 'react';
import { Box } from '@material-ui/core';
import MemberCard from '../members/memberCard';

type Props = {
    searchResult: {
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
    }
}

const SearchResult = ({searchResult}: Props) => {
    const {
        name,
        avatar,
        phone,
        email,
        address
    } = searchResult
    
    return (
        <Box display="flex" flexDirection="row" justifyContent="center" m={3}>
            <MemberCard name={name} avatar={avatar} phone={phone} email={email} address={address}/>
        </Box>
    )
}

export default SearchResult;
