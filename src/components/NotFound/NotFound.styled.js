import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 260px;
  color: black;
  text-decoration: none;
  margin-bottom: 20px;
  transition: color 250ms linear;

  &:hover {
    color: #0000cc;
  }
`;

export const Text = styled.p`
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  color: brown;
`;
