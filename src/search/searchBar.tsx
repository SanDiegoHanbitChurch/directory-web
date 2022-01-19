import React, {useState} from 'react';
import {makeStyles, IconButton, Box, InputBase, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

type Props = {
  handleOnSearch: (searchTerm: string) => void
  handleOnClickOpen: () => void,
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
    iconButton: {
      padding: 10,
    },
  }));

const SearchBar = ({handleOnSearch, handleOnClickOpen}: Props) => {
    const classes = useStyles();

    const [ searchTermState, setSearchTermState ] = useState('')
    
    const handleOnFieldState = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTermState(event.target.value);
    }

    const handleOnSearchOpen = () => {
      handleOnSearch(searchTermState)
      handleOnClickOpen()
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
                <IconButton 
                    color='primary' 
                    className={classes.iconButton} 
                    disabled={!searchTermState || searchTermState.length < 3} 
                    onClick={handleOnSearchOpen}
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Box>
    )
}

export default SearchBar;
