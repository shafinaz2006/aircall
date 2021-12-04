import styled from "styled-components";

export const CallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const CallDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: center;
  width: 100%;
  padding-bottom: 1rem;

  p{
    width: 30%;
    font-weight: bold;
    letter-spacing: 0.3px;
    opacity: 0.5;
    text-align: center;
  }

  div {
    width: 35%;
    height: 1px;
    border-bottom: 2px dotted rgba(169, 169, 169, 0.25);
  }
`;

export const CallInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  border: 2px solid rgba(169, 169, 169, 0.25);
  border-radius: 12px;
  padding: 0.75rem 0;
`;

export const Icon = styled.p`
  margin: 0.5rem 1rem;
  font-size: 1.25rem;
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
  text-align: center;
  line-height: 1.5rem;
  vertical-align: middle;
`;

export const CallNumber = styled.div`
  width: 60%;
`;

export const Number = styled.p`
  font-weight: bold;
  letter-spacing: 0.25px;
  padding-bottom: 0.4rem;
`;

export const Name = styled.p`
  opacity: 0.5;
  padding-bottom: 1rem;
  span{
    font-weight: bold;
  }
`;

export const Button = styled.button`
  border: 2px solid rgba(169, 169, 169, 0.25);
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  margin-right: 1rem;
  color: black;
  opacity: 0.75;
  a{
    text-decoration: none;
    
  }
`;

export const CallTime = styled.div`
  display: flex;
  border-left: 2px dotted gray;
  align-items: center;
  opacity: 0.5;
  font-weight: bold;
`;

export const Time = styled.p`
  padding: 0 0.5rem; 
`;

export const Period = styled.p`
  border: 1px solid gray;
  border-right: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 0.25rem;
`;