import React from 'react';
import { Grid } from '@material-ui/core';
import { MemberType } from '../types';
import SearchResult from './searchResult';

type Props = {
    searchResults: MemberType[],
}

const renderResult = (searchResult: MemberType) => {
    return (
        <Grid item xs={12}>
            <SearchResult key={searchResult.id} searchResult={searchResult} />
        </Grid>
    )
}

const SearchResults = ({searchResults}: Props) => {
    console.log('searchResults', searchResults)
    return (
        <Grid>
            {searchResults.map((searchResult) => renderResult(searchResult))}
        </Grid>
    )
}

export default SearchResults;
