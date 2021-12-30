import React from 'react';
import './App.css';
import MembersContainer from './members';
import HanbitLogo from './assets/hanbitLogo.svg';
import { Box } from '@material-ui/core';

function App() {
  return (
    <div>
      <Box display='flex' justifyContent='center'>
        <img src={HanbitLogo} alt="HanbitLogo" />
      </Box>
      <MembersContainer />
    </div>
  );
}

export default App;
