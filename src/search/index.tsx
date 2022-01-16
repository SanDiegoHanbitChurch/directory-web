import React, { useState } from 'react';
import { User } from '../types';
import SearchDialog from './searchDialog';
import { searchMembers } from '../api/index';

type Props = {
    user: User
}

const SearchContainer = ({user}: Props) => {
    const [searchResultState, setSearchResultState] = useState([])

    const handleOnSearch = async (searchTerm: string) => {
        const result = await searchMembers(user,searchTerm)
        setSearchResultState(result);
    }

    return (
        <SearchDialog searchResults={searchResultState} handleOnSearch={handleOnSearch}/>
    )
}

export default SearchContainer;
