import React from 'react';
import getCallData from '../../data/getCallData';
import Call from '../Call';
import { Icon } from '../Call/styled';
import { Wrapper, Archive, ArchiveCalls } from './styled';


const Activities = () => {
  const {allCalls, archiveAllCalls, detailError} = getCallData();
  
  return(
    <>
    {allCalls &&
      <Wrapper>
        <Archive>
          <ArchiveCalls onClick={archiveAllCalls}>
            <Icon color='blue'>&#9881;</Icon>
            <p>Archive all calls</p>
          </ArchiveCalls>
        </Archive>
        {allCalls && allCalls.map(call => 
          <Call key={call.id} call={call} />
        )}
      </Wrapper>
    }
    {detailError === 'NoCalls' && <h1>No calls for now </h1>}
    </>
  )
};

export default Activities;