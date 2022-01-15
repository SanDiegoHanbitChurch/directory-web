import React, {useState} from 'react';
import {makeStyles, IconButton, Box, InputBase, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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

const SearchBar = () => {
    const classes = useStyles();

    const [ fieldState, setFieldState ] = useState('')
    
    const handleOnFieldState = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setFieldState(event.target.value)
    }

    return (
        <Box>
            <Paper className={classes.root} variant='outlined' elevation={10}>
                <InputBase
                    value={fieldState}
                    onChange={handleOnFieldState}
                    className={classes.input}
                    placeholder='Search users...'
                />
                <IconButton color='primary' className={classes.iconButton} disabled={!fieldState}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Box>

    )
}

export default SearchBar;
