import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
  color: white;
  user-select: none;
`;

export const NavigationLogo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
`;
export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  @media (max-width: 850px) {
    display: block;
  }
`;

export const NavigationLoginLink = styled.li`
  @media (max-width: 630px) {
    display: flex;
  }
`;

export const NavigationUserInfo = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const NavigationLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 850px) {
    li {
      display: none;
    }
  }
`;

export const NavigationItemLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => (props.$active ? "#4caf50" : "white")};
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #b0b0b0;
  }
`;

export const NavigationIcon = styled.span`
  margin-right: 16px;
  display: flex;
  align-items: center;

  &.small {
    margin-right: 6px;
  }
`;

export const NavigationUserIcon = styled(NavigationIcon)`
  color: #4caf50;
`;

/* User name */
export const NavigationUserName = styled.span`
  font-weight: bold;
  color: white;
`;

export const NavigationLabel = styled.span`
  @media (max-width: 1250px) {
    display: none;
  }
`;

export const CollapsedMenu = styled.ul`
  position: absolute;
  top: 60px;
  right: 3rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  list-style: none;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;

  li {
    display: flex;
    align-items: center;
  }

  ${NavigationItemLink} {
    font-weight: bold;
    &:hover {
      color: #4caf50;
    }
  }
`;
