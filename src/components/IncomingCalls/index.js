import React from 'react';
import getCallData from '../../data/getCallData';
import Call from '../Call';

const IncomingCalls = () => {
  const {incomingCalls, incomingError} = getCallData();

  return(
  <div>
    {incomingCalls && incomingCalls.map(call => 
      <Call key={call.id} call={call} />
    )}
    {incomingError && <h1>No incoming calls for now </h1>}
  </div>)
};

export default IncomingCalls;