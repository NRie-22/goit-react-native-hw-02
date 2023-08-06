import styled from 'styled-components';

export const ContactItem = styled.li`
  width: 295px;
  height: 62px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  background-color: white;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 25px;
  }

  @media screen and (min-width: 768px) {
    width: 320px;
    height: 70px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export const ContactName = styled.p`
  font-size: 18px;
  margin-bottom: 3px;
  color: #0000cc;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

export const ContactNumber = styled.p`
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const DeleteBtn = styled.button`
  width: 70px;
  height: 35px;
  margin: auto 0;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  background-color: #ff4d4d;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: #ff0000;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 80px;
  }
`;
