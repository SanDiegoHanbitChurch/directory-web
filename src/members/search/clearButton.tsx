import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton, Box,} from '@material-ui/core';

type Props = {
    handleOnClear: () => void,
    searchTermState: string,
}

const ClearButton = ({handleOnClear, searchTermState}: Props) => {
    return (
        <Box>
            <IconButton 
                color='primary' 
                disabled={!searchTermState || searchTermState.length < 3} 
                onClick={handleOnClear}
            >
                <ClearIcon />
            </IconButton>
        </Box>
    )
}

export default ClearButton;
