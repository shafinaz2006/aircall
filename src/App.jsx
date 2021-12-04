import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Routes, Route, Navigate, HashRouter, Link} from "react-router-dom";
import Header from './Header.jsx';
import Activities from './components/Activities';
import IncomingCalls from './components/IncomingCalls';
import CallDetail from './components/CallDetail/index.js';
import ArchivedCalls from './components/ArchiveCalls/ArchiveCalls.js';

const HeaderLinkWrapper = styled.div`
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <HashRouter basename='/'>
        <HeaderLinkWrapper>
          <Link to='/activities' className='link' current={window.location.href.indexOf('activities') !== -1} >Activities </Link>
          <Link to='/incomingcalls' className='link' current={window.location.href.indexOf('incoming') !== -1} > Incomings </Link>
          <Link to='/archivedcalls' className='link' current={window.location.href.indexOf('archived') !== -1} >Archived </Link>
        </HeaderLinkWrapper>

        <Routes>
          <Route path='/incomingcalls'  element={<IncomingCalls />} />
          <Route path='/calls/:id'  element={<CallDetail /> } />
          <Route path='/archivedcalls'  element={<ArchivedCalls />} />
          <Route path='/activities'  element={<Navigate to ="/" />}/>
          <Route path='/' exact element={<Activities />} />
          <Route path='*'  element={<h1>404: Page not found</h1>} />
        </Routes>
      </HashRouter>
    </div>
  );
};


ReactDOM.render(<App/>, document.getElementById('app'));
export default App;
