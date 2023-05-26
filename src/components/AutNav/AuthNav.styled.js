import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  display: flex;
  gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 8px;
  border-radius: 10px;
  border: solid 2px teal;
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  font-weight: 600;

  // line-height: 1.2;
  cursor: pointer;
  :focus,
  :hover {
    background-color: rgba(0, 128, 128, 0.8);
    transform: scale(1.1);
    color: #ffffff;
  }
`;
