import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate, HashRouter, } from "react-router-dom";
import Header from './Header.jsx';
import Activities from './components/Activities';
import IncomingCalls from './components/IncomingCalls';
import CallDetail from './components/CallDetail/index.js';
import ArchivedCalls from './components/ArchiveCalls/ArchiveCalls.js';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <HashRouter basename='/'>
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
