import styled from 'styled-components';
import { Button } from '../Call/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: 5%;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CallDuration = styled.p`
  opacity: 0.5;
`;

export const BackButton = styled(Button)`
  margin: 1rem;
  padding: 1rem 2rem;
  border-radius: 8px;
`;