import styled from "styled-components";

export const CookieOverlay = styled.div.attrs({
  "aria-hidden": "true",
  "data-nosnippet": "",
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9998;
`;

export const CookieBannerWrapper = styled.div.attrs({
  "aria-hidden": "true",
  "data-nosnippet": "",
})`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(200, 200, 200, 0.95);
  color: #000;
  padding: 1.5rem 2rem;
  border-radius: 10px;
  z-index: 9999;
`;

export const CookieButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const CookieButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  font-family: inherit;

  &.accept {
    background-color: #4caf50;
    color: white;

    &:hover {
      background-color: #449d46;
    }
  }

  &.decline {
    background-color: #ff4c4c;
    color: white;

    &:hover {
      background-color: #e04343;
    }
  }
`;
