import React from 'react';
import getCallData from '../../data/getCallData';
import Call from '../Call';

const ArchivedCalls = () => {
  const { archivedCalls } = getCallData();

  return(<div>
    {archivedCalls && archivedCalls.map(call => 
      <Call key={call.id} call={call} /> 
    )}
    {archivedCalls.length === 0 && <h1> There are no archived calls</h1>}
  </div>)
};

export default ArchivedCalls;