// src/components/navigation/NavigationStyles.js
import styled from "styled-components";

/* Navbar container */
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
`;

/* Logo link */
export const LogoLink = styled.a`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
`;

export const LoginListItem = styled.li`
  @media (max-width: 475px) {
    display: flex;
  }
`;

/* Nav links container */
export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
  align-items: center;
  
  @media (max-width: 475px) {
    li:not(${LoginListItem}) {
      display: none; /* hide everything except login */
    }
  }
`;

/* Each nav item link */
export const NavItemLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #b0b0b0;
  }
`;

/* Login link container */
export const LoginLink = styled.li``;

/* User info container */
export const UserInfo = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;
`;

/* FontAwesome icons */
export const NavIcon = styled.span`
  margin-right: 16px;
  display: flex;
  align-items: center;

  &.small {
    margin-right: 6px;
  }
`;

/* User icon color override */
export const UserIcon = styled(NavIcon)`
  color: #4caf50;
`;

/* User name */
export const UserName = styled.span`
  font-weight: bold;
  color: white;
`;

export const NavLabel = styled.span`
  @media (max-width: 800px) {
    display: none;
  }
`;
