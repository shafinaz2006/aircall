import styled from "styled-components";
import { CallWrapper, CallInfo} from "../Call/styled";

export const Wrapper = styled.div`
  margin-top: 1rem;
`;

export const Archive = styled(CallWrapper)`
  
`;

export const ArchiveCalls = styled(CallInfo)`
  font-weight: bold;
  opacity: 0.85;
  letter-spacing: 0.3px;
  justify-content: center;
  cursor: pointer;
  
  p{
    padding: 0.25rem;
  }
`;


