import React from "react";
import getCallData from "../../data/getCallData";
import { CallWrapper, CallDate, CallInfo, Button, CallNumber, Icon, Number, Name, CallTime, Time, Period } from "./styled";

const Call = (props) => {
  const {archiveCall, getDate, getTime} = getCallData();
  const { call } = props;
  const d = new Date(call.created_at);
  const callNumber = call.direction === 'inbound' ? call.from: call.to;
  const callText = call.direction === 'inbound' ? 'tried to call on ': 'called to ';
  const callName = call.direction === 'inbound' ? call.to || 'Unknown' : call.from || 'Unknown';
  const {hour, minute, period} = getTime(d);

  return(
    <CallWrapper>
      <CallDate><div></div><p>{getDate(d)}</p><div></div></CallDate>
      <CallInfo>
        {call.direction === 'inbound' ? <Icon color='green'>&#8595; </Icon> : <Icon color='red'>&#8593;</Icon>}
        <CallNumber>
          <Number>+{callNumber}</Number>
          <Name>{callText}<span>{callName}</span></Name>
          <Button><a href={`/#/calls/${call.id}`}>Details</a> </Button>
          {!call.is_archived && <Button onClick={(event) => archiveCall(call.id)}>Archive</Button>}
        </CallNumber>
        <CallTime>
          <Time>{hour}:{minute}</Time>
          <Period>{period}</Period>
        </CallTime>
      </CallInfo>
    </CallWrapper>
  )
}

export default Call;