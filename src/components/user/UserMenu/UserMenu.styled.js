import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const User = styled.p`
  font-size: 18px;
  color: black;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    margin-right: 15px;
    font-size: 24px;
    margin-bottom: 0px;
  }
`;

export const LogOutBtn = styled.button`
  width: 80px;
  font-size: 18px;
  color: black;
  border: none;
  padding: 8px 9px;
  border-radius: 30px;

  @media screen and (max-width: 767px) {
    display: block;
    margin-left: auto;
  }

  cursor: pointer;
  background: linear-gradient(90deg, #ff0000, #ffff00);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  transition: box-shadow 250ms linear;

  :hover,
  :focus {
    box-shadow: rgba(255, 0, 0, 0.7) 0px 5px 15px;
  }

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 40px;
    font-size: 24px;
    padding: 6px 12px;
  }
`;
