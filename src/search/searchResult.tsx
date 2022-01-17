import React from 'react';
import { Typography } from '@material-ui/core';
import { MemberType } from '../types';

type Props = {
    searchResults: MemberType[],
}

const SearchResult = ({searchResults}: Props) => {
    return (
        <Typography>
            {JSON.stringify(searchResults)}
        </Typography>
    )
}

export default SearchResult;
