import styled from 'styled-components';

export const Form = styled.form`
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  width: 280px;
  margin: 0 auto 20px;
  background-color: #f4f4f4;

  @media screen and (min-width: 768px) {
    width: 314px;
    padding: 30px;
    border: 2px;
  }
`;

export const ContactLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  font-size: 16px;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const ContactInput = styled.input`
  height: 30px;
  margin-top: 6px;
  padding: 3px 6px;
  border-radius: 4px;
  border: 1px solid black;
  font-size: 16px;
  transition: border 300ms linear;

  &:hover,
  &:focus {
    border: 2px solid #008000;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 250px;
    margin-top: 8px;
  }
`;

export const AddBtn = styled.button`
  width: 100%;
  height: 35px;
  padding: 3px 6px;
  border-radius: 4px;
  margin: 8px auto 0px;
  border: none;
  font-size: 16px;
  background-color: #456afa;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: #f1c232;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 250px;
  }
`;
