/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useParams } from "react-router";
import getCallData from "../../data/getCallData";
import { CallInfo, CallNumber, Icon, Number, Name, CallTime, Time, Period, CallDate } from "../Call/styled";
import { Wrapper, IconWrapper, CallDuration, BackButton } from './styled';

const CallDetail = () => {
  let routeParam = useParams();
  const {getCallDetails, detailError, callDetail, getDate, getTime} = getCallData();

  const d = new Date(callDetail.created_at);
  const callNumber = callDetail.direction === 'inbound' ? callDetail.from: callDetail.to;
  const callText = callDetail.direction === 'inbound' ? 'tried to call on ': 'called to ';
  const callName = callDetail.direction === 'inbound' ? callDetail.to || 'Unknown' : callDetail.from || 'Unknown';
  const {hour, minute, period} = getTime(d);

  const callStatus = () => {
    if(callDetail.call_type === 'missed')
      return <Icon color='red'>&#10005; </Icon>
    else if (callDetail.call_type === 'answered')
      return <Icon color='green'>&#10003; </Icon>
    else
      return <Icon color='orange'>&#9990; </Icon>
  }

  useEffect(() => {
    getCallDetails(routeParam.id);
  }, []);

  return(
    <>
    {callDetail.id && (
      <Wrapper>
        <CallDate><div></div><p>{getDate(d)}</p><div></div></CallDate>
        <CallInfo>
          <IconWrapper>
            {callDetail.direction === 'inbound' ? <Icon color='green'>&#8595; </Icon> : <Icon color='red'>&#8593;</Icon>}
            {callStatus()}
          </IconWrapper>
          <CallNumber>
            <Number>+{callNumber}</Number>
            <Name>{callText}<span>{callName}</span></Name>
            <CallDuration>Call duration: <span>{callDetail.duration}s</span></CallDuration>
          </CallNumber>
          <CallTime>
            <Time>{hour}:{minute}</Time>
            <Period>{period}</Period>
          </CallTime>
        </CallInfo>
        <a href={`${document.referrer}`}><BackButton> Back </BackButton></a>
      </Wrapper>)
    }
    {detailError === 'NoDetails' && <h1>No Details Found</h1>}
    </>
  );
};

export default CallDetail;