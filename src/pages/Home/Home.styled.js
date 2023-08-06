import styled from 'styled-components';

export const HomeText = styled.h1`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  margin: auto;
  color: #f3f6f4;
  animation-name: slidein;

  @keyframes slidein {
    from {
      transform: scale(30%);
    }

    to {
      transform: scale(100%);
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
`;

export const TextWrap = styled.div`
  min-height: calc(100vh - 75px);
  width: 260px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0px auto;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
