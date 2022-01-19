import React, {useState} from 'react';
import {makeStyles, Box, InputBase, Paper } from '@material-ui/core';
import SearchButton from './searchButton';
import ClearButton from './clearButton';

type Props = {
  handleOnSearch: (searchTerm: string) => void,
  handleOnMembers: () => void,
}

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 540,
      opacity: 0.7,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
  }));

const SearchBar = ({handleOnSearch, handleOnMembers}: Props) => {
    const classes = useStyles();

    const [ searchTermState, setSearchTermState ] = useState('')
    
    const handleOnFieldState = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTermState(event.target.value);
    }

    const handleOnClear = () => {
      setSearchTermState('')
      handleOnMembers()
    }

    return (
        <Box display='flex' justifyContent='center' m={1}>
            <Paper className={classes.root} variant='outlined' elevation={10}>
                <InputBase
                    value={searchTermState}
                    onChange={handleOnFieldState}
                    className={classes.input}
                    placeholder='Search users...'
                />
                <SearchButton searchTermState={searchTermState} handleOnSearch={handleOnSearch} />
                <ClearButton handleOnClear={handleOnClear} searchTermState={searchTermState} />
            </Paper>
        </Box>
    )
}

export default SearchBar;
