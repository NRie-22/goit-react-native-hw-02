import styled from 'styled-components';

export const Subtitle = styled.h2`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 28px;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 18px;
    text-align: center;
  }
`;

export const ContactWrap = styled.div`
  margin: 0 auto;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    width: 700px;
    padding-top: 50px;
    padding-top: 50px;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    width: 800px;
  }
`;

export const Loading = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;
