import React, { useState } from 'react';
import { User, MemberType } from '../types';
import SearchDialog from './searchDialog';
import { searchMembers } from '../api/index';

type Props = {
    user: User
}

const SearchContainer = ({user}: Props) => {
    const [searchResultState, setSearchResultState] = useState<MemberType[]>([])

    const handleOnSearch = async (searchTerm: string) => {
        const result = await searchMembers(user,searchTerm)
        setSearchResultState(result);
    }

    return (
        <SearchDialog searchResults={searchResultState} handleOnSearch={handleOnSearch}/>
    )
}

export default SearchContainer;
