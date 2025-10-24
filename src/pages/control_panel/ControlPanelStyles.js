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
  font-family: "AlbertusMedium", Arial, sans-serif;
  user-select: none;
`;

export const GreenButton = styled.button`
  padding: 0.7rem 1.5rem;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #45a049;
  }
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
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem 3rem;
  border-radius: 10px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 700px;
  height: 700px;

  max-height: 75vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #666;
  }

  &:hover {
    color: #fff;
  }

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

export const ControlPanelStatsButtonText = styled.span`
  @media (max-width: 600px) {
    display: none;
  }
`;
// === Achievements Tab Styles ===

export const AchievementList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const AchievementItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${({ claimed }) => (claimed ? "#4caf50" : "#555")};
  border-left: 6px solid
    ${({ claimed, unlocked }) =>
      claimed ? "#4caf50" : unlocked ? "#2196f3" : "#777"};
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.2s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const AchievementInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 40px;
    height: 40px;
    filter: ${({ claimed }) => (claimed ? "grayscale(0%)" : "grayscale(100%)")};
    opacity: ${({ unlocked }) => (unlocked ? 1 : 0.5)};
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h4 {
    margin: 0;
    color: ${({ claimed }) => (claimed ? "#4caf50" : "#fff")};
    font-size: 1.1rem;
  }

  p {
    margin: 0;
    color: #bbb;
    font-size: 0.9rem;
  }
`;

export const AchievementReward = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ccc;
  font-size: 0.9rem;
`;

export const ControlPanelTabButton = styled.button`
  flex: 1;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  border-bottom: ${({ active }) =>
    active ? "4px solid #4caf50" : "4px solid transparent"};
  color: ${({ active }) => (active ? "#fff" : "#bbb")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 16px;

  span {
    display: inline; /* default show text */
  }

  @media (max-width: 550px) {
    padding: 0.75rem;
    span {
      display: none; /* hide text */
    }
  }
`;

export const ControlPanelTabContent = styled.div`
  width: 100%;
  color: #ccc;
`;

export const ControlPanelFooter = styled.footer`
  text-align: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  position: relative;
  z-index: 2;
`;
