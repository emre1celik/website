import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  user-select: none;
`;

export const NavigationLogo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
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

  @media (max-width: 630px) {
    li {
      display: none;
    }

    ${NavigationLoginLink},
    ${NavigationUserInfo} {
      display: flex;
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
  @media (max-width: 970px) {
    display: none;
  }
`;
