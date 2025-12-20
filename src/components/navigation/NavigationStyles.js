import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  position: relative;
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
    display: none;
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
    color: #4caf50;
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

export const NavigationUserName = styled.span`
  font-weight: bold;
  color: white;
`;

export const NavigationLabel = styled.span`
  @media (max-width: 1250px) {
    display: none;
  }
`;
export const MobileDrawer = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;

  margin: 0; /* ✅ kill default UL margin */
  padding: 1.5rem 1.5rem 2rem;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  z-index: 2000;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  transform: ${({ $open }) => ($open ? "translateY(0)" : "translateY(-120%)")};
  transition: transform 0.1s ease;

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  padding-left: 55px;

  li {
    display: flex;
    align-items: center;
  }
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

export const DrawerLogo = styled(NavigationLogo)`
  font-size: 2rem;
`;

export const DrawerCloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.25rem;
  line-height: 1;
`;

export const DrawerBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1500;
`;
