import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import SearchFab from './searchFab';
import SearchBar from './searchBar';
import SearchResults from './searchResults';
import { MemberType } from '../types';

type Props = {
    searchResults: MemberType[],
    handleOnSearch: (searchTerm: string) => void
}

const SearchDialog = ({searchResults, handleOnSearch}: Props) => {
    const [ openState, setOpenState ] = useState(false)

    const handleOnClickOpen = () => {
        setOpenState(true)
    }

    const handleOnClickClose = () => {
        setOpenState(false)
    }

    return (
        <>
        <SearchFab handleOnClickOpen={handleOnClickOpen} />
        <Dialog fullWidth={true} open={openState} aria-labelledby="form-dialog-title">
            <DialogContent>
                <SearchBar handleOnSearch={handleOnSearch} />
                <SearchResults searchResults={searchResults} />
                <DialogActions>
                <Button onClick={handleOnClickClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
            </DialogContent>
        </Dialog>
        </>
    )
}

export default SearchDialog;
