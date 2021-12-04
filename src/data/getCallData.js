/* eslint-disable react-hooks/rules-of-hooks */
import {useState, useEffect} from 'react';
import axios from 'axios';

function getCallData(){
  const [allCalls, setAllCalls] = useState([]);
  const [incomingCalls, setIncomingCalls] = useState([]);
  const [callDetail, setCallDetail] = useState({});
  const [archivedCalls, setArchivedCalls] = useState([]);
  const [detailError, setDetailError] = useState('');
  const [incomingError, setIncomingError] = useState(false);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  // get all the calls: 

  const getAllCalls = () => {
    axios
      .get('https://aircall-job.herokuapp.com/activities')
      .then(response => {
        let allCalls = response.data.filter(call => call.is_archived === false);
        if(allCalls.length === 0) setDetailError('NoCalls');
        else {
          setAllCalls(allCalls);
          setDetailError('');
        }
        let incomingCalls = allCalls.filter(call => call.direction === 'inbound');
        if(incomingCalls.length === 0) setIncomingError(true);
        setIncomingCalls(incomingCalls);
        let archivedCalls = response.data.filter(call => call.is_archived === true);
        setArchivedCalls(archivedCalls);
      })
      .catch(error => console.log('Error to get all calls: ', error));
  }

  const getCallDetails = (id) => {
    axios
      .get(`https://aircall-job.herokuapp.com/activities/${id}`)
      .then(response => {
        if(response.data.length === 0) setDetailError('NoDetails')
        setCallDetail(response.data);
      })
      .catch(error => setDetailError('NoDetails'));
  }

  const archiveCall = (id) => {
    axios
      .post(`https://aircall-job.herokuapp.com/activities/${id}`, {is_archived: true})
      .then(response =>{
        let allCallsNew = allCalls.filter(call => call.id !== id);
        setAllCalls([...allCallsNew]);
      })
      .catch(error => console.log('Call can"t be archived', error))
  }

  const archiveAllCalls = () =>{
    for(let i = 0; i < allCalls.length; i++){
      if(!allCalls[i].is_archived){
        archiveCall(allCalls[i].id);
      }
    }
  }
  
  // format date:

  const getDate = (d) => {
    return `${months[d.getMonth()].toUpperCase()}, ${d.getDay()} ${d.getFullYear()}`;
  }

  // format time:

  const getTime = (d) => {
    let hour = d.getHours();
    let minute = d.getMinutes();
    let period = hour > 12 ? 'PM' : 'AM';
    hour = hour > 12? hour - 12 : hour; 
    return{hour, minute, period};
  }

  useEffect(() => {
    getAllCalls();
  }, []);

  useEffect(() => {
    getAllCalls();
  }, [allCalls]);

  return {allCalls, getCallDetails, incomingError, detailError, archiveCall, archiveAllCalls,
    incomingCalls, archivedCalls, callDetail, getDate, getTime};
}

export default getCallData;