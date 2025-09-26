import styled from "styled-components";
import backgroundImg from "../../assets/images/2151470664.jpg";

export const ControlPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  font-family: 'AlbertusMedium', Arial, sans-serif;
`;

export const ControlPanelContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 432px) {
    padding: 1rem;
  }
`;

export const ControlPanelBox = styled.div`
  background: rgba(0,0,0,0.7);
  padding: 2rem 3rem;
  border-radius: 10px;
  width: 100%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: white;
  }
`;

export const ControlPanelTabs = styled.div`
  display: flex;
  gap: 0;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #555;
  width: 100%;
`;

export const ControlPanelTabButton = styled.button`
  flex: 1;
  padding: 0.75rem 3rem;
  background: transparent;
  border: none;
  border-bottom: ${({ active }) => (active ? "4px solid #4caf50" : "4px solid transparent")};
  color: ${({ active }) => (active ? "#fff" : "#bbb")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #fff;
  }
`;

export const ControlPanelTabContent = styled.div`
  width: 100%;
  color: #ccc;
`;

export const ControlPanelFooter = styled.footer`
  text-align: center;
  padding: 1rem;
  background: rgba(0,0,0,0.5);
  color: white;
  position: relative;
  z-index: 2;
`;
