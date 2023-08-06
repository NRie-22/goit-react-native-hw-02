import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  width: 280px;
  border-radius: 12px;
  padding: 20px;
  background-color: #f4f4f4;

  @media screen and (min-width: 768px) {
    width: 310px;
    padding: 30px;
  }
`;

export const RegisterLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const RegisterInput = styled.input`
  width: 100%;
  height: 30px;
  margin-top: 8px;
  padding: 3px 6px;
  border-radius: 4px;
  border: 1px solid black;
  font-size: 18px;
  transition: border 300ms linear;

  &:hover,
  &:focus {
    border: 2px solid #f1c232;
  }
`;

export const RegisterBtn = styled.button`
  width: 100%;
  height: 35px;
  padding: 3px 6px;
  border-radius: 4px;
  margin: 8px auto 0px;
  border: none;
  font-size: 16px;
  background-color: #e69138;
  color: white;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: #f1c232;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
