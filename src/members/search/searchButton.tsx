import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Box } from '@material-ui/core';

type Props = {
    searchTermState: string,
    handleOnSearch: (searchTerm: string) => void,
}

const SearchButton = ({searchTermState, handleOnSearch}: Props) => {
    return (
        <Box>
            <IconButton 
                color='primary' 
                disabled={!searchTermState || searchTermState.length < 3} 
                onClick={() => handleOnSearch(searchTermState)}
            >
                <SearchIcon />
            </IconButton>
        </Box>
    )
}

export default SearchButton;
