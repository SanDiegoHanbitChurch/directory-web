import React from 'react';
import { Fab , makeStyles} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
          margin: 0,
          top: 'auto',
          right: 20,
          bottom: 20,
          left: 'auto',
          position: 'fixed',
      },
    },
  }));

const SearchFab = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Fab
                color="secondary" 
                aria-label="add" 
                className='SearchButton' 
                size='large'
            >
                <SearchIcon />
            </Fab>
        </div>
    )
}

export default SearchFab;
