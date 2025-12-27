import styled from "styled-components";

export const ControlPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${({ theme }) => theme?.background || "none"});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme?.text || "#fff"};
  font-family: "AlbertusMedium", Arial, sans-serif;
  user-select: none;
`;

export const GreenButton = styled.button`
  padding: 0.7rem 1.5rem;
  background-color: ${({ theme }) => theme?.primary || "#4caf50"};
  border: none;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s, box-shadow 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme?.primary || "#4caf50"};
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const ControlPanelContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  box-sizing: border-box;
  animation: fadeInUp 0.8s ease both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 432px) {
    padding: 1rem;
  }
`;

export const ControlPanelBox = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem 3rem;
  border-radius: 12px;
  width: 700px;
  max-width: 100%;
  height: 700px;
  max-height: 75vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow-y: auto;

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 4px;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: #fff;
  }
`;

export const ControlPanelTabs = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #555;
  width: 100%;
`;

export const ControlPanelStatsButtonText = styled.span`
  @media (max-width: 600px) {
    display: none;
  }
`;

// === Achievements & Characters ===

export const AchievementList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const CharacterCard = styled.div`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme?.primary || "#4caf50"};
  border-left: 6px solid ${({ theme }) => theme?.primary || "#4caf50"};
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const CharacterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  flex-wrap: wrap;

  h4 {
    margin: 0;
    font-size: 1.4rem;
    color: ${({ theme }) => theme?.primary || "#4caf50"};
  }

  .class-info {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1rem;
    color: #ccc;

    img {
      width: 28px;
      height: 28px;
    }
  }
`;

export const CharacterStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 0.5rem;
  color: #ccc;
  font-size: 0.95rem;

  p {
    margin: 0;
    background: rgba(0, 0, 0, 0.3);
    padding: 0.4rem 0.6rem;
    border-radius: 6px;
  }

  strong {
    color: #fff;
  }
`;

export const MountSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #555;
  border-radius: 6px;
  padding: 0.4rem 0.6rem;
  color: #ccc;
  font-size: 0.95rem;
  width: fit-content;

  label {
    color: ${({ theme }) => theme?.primary || "#4caf50"};
    font-weight: bold;
  }

  select {
    background: transparent;
    color: #fff;
    border: none;
    outline: none;
    padding: 0.3rem 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    appearance: none;
    font-family: inherit;

    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }

  select option {
    background: #222;
    color: #fff;
  }
`;

export const CharacterActions = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  width: 100%;
`;

export const AchievementItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid
    ${({ claimed, theme }) => (claimed ? theme?.primary || "#4caf50" : "#555")};
  border-left: 6px solid
    ${({ claimed, unlocked, theme }) =>
      claimed || unlocked ? theme?.primary || "#4caf50" : "#777"};
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
    color: ${({ claimed, theme }) =>
      claimed ? theme?.primary || "#4caf50" : "#fff"};
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
  border-bottom: ${({ active, theme }) =>
    active
      ? `4px solid ${theme?.primary || "#4caf50"}`
      : "4px solid transparent"};
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
    display: inline;
  }

  @media (max-width: 670px) {
    padding: 0.75rem;

    span {
      display: none;
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
