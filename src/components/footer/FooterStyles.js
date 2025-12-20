import styled from "styled-components";

export const FooterWrapper = styled.footer`
  text-align: center;
  backdrop-filter: blur(2px);
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  position: relative;
  z-index: 2;
  font-size: 0.9rem;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const ThemeSwitcher = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
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
