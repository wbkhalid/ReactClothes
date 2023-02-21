import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 25px;
  text-transform: uppercase;
  color: #000;
`;

export const NavLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const NavLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

