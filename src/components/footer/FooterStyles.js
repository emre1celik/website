import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.4rem 0.75rem;
  height: 42px;

  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 0.8rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
`;


export const ThemeSwitcher = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const ThemeButton = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.6);
  background: ${({ $color }) => $color};
  cursor: pointer;
  padding: 0;

  &:hover {
    transform: scale(1.1);
  }

  &.active {
    border-color: white;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
`;
