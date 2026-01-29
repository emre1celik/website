import styled, { keyframes, css } from "styled-components";

export const HighscoresWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${({ theme }) => theme?.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  font-family: "AlbertusMedium", Arial, sans-serif;
  user-select: none;
`;

export const HighscoresContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
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
`;

const goldGlow = keyframes`
  0% { text-shadow: 0 0 5px gold, 0 0 10px gold; }
  50% { text-shadow: 0 0 20px orange, 0 0 30px gold; }
  100% { text-shadow: 0 0 5px gold, 0 0 10px gold; }
`;

const silverGlow = keyframes`
  0% { text-shadow: 0 0 5px silver, 0 0 10px silver; }
  50% { text-shadow: 0 0 20px #dcdcdc, 0 0 30px silver; }
  100% { text-shadow: 0 0 5px silver, 0 0 10px silver; }
`;

const bronzeGlow = keyframes`
  0% { text-shadow: 0 0 5px #cd7f32, 0 0 10px #cd7f32; }
  50% { text-shadow: 0 0 20px #a0522d, 0 0 30px #cd7f32; }
  100% { text-shadow: 0 0 5px #cd7f32, 0 0 10px #cd7f32; }
`;

export const GlowingName = styled.span`
  ${({ rank, theme }) =>
    rank === 0 &&
    css`
      color: gold;
      animation: ${goldGlow} 2s ease-in-out infinite alternate;
    `}
  ${({ rank, theme }) =>
    rank === 1 &&
    css`
      color: silver;
      animation: ${silverGlow} 2s ease-in-out infinite alternate;
    `}
  ${({ rank, theme }) =>
    rank === 2 &&
    css`
      color: #cd7f32;
      animation: ${bronzeGlow} 2s ease-in-out infinite alternate;
    `}
  ${({ rank, theme }) =>
    (rank === 3 || (rank >= 4 && rank <= 25)) &&
    css`
      color: ${theme.primary};
    `}
`;

export const HighscoresBox = styled.div`
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;

  max-height: 75vh;
  overflow-y: auto;

  max-width: 1200px;

  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.12);

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    color: white;
    flex-shrink: 0;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.35);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.35);
  }
`;

export const BottomFade = styled.div`
  position: sticky;
  bottom: -40px;
  left: 0;
  width: 100%;
  height: 50px;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.85) 100%
  );
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 5;
`;

export const HighscoresFilter = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  label {
    font-weight: bold;
    color: ${({ theme }) => theme.text};
  }

  select {
    background: rgba(0, 0, 0, 0.6);
    color: ${({ theme }) => theme.text};
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.primary};
    cursor: pointer;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.primary};
    }
  }
`;

export const ClassIconWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover .class-tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

export const ClassTooltip = styled.span`
  visibility: hidden;
  background-color: #1a1a1a;
  color: #fff;
  text-align: center;
  border: 1px solid #888;
  border-radius: 4px;
  padding: 5px 10px;
  position: absolute;
  z-index: 10;
  bottom: 110%; /* place tooltip above the icon */
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.3s;
`;
export const HighscoresTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-size: 14px;

  th,
  td {
    padding: 0.55rem 0.7rem;
    line-height: 1.2;
    border-bottom: 1px solid #444;
  }

  th {
    color: ${({ theme }) => theme.primary};
    text-transform: uppercase;
  }
  tbody tr:hover {
    z-index: 50;
  }
  tbody tr:not(:hover) {
    z-index: 0;
  }

  tbody tr:nth-child(even) {
    background: rgba(255, 255, 255, 0.05);
  }

  /* Hide stat columns on smaller screens (<1300px) */
  @media (max-width: 1300px) {
    .hideOnSmall {
      display: none;
    }
  }

  /* For very small screens (<600px), only show Rank, Name, Resets */
  @media (max-width: 600px) {
    th:nth-child(n+4),
    td:nth-child(n+4) {
      display: none;
    }

    th:nth-child(1),
    th:nth-child(2),
    th:nth-child(4), /* Resets */
    td:nth-child(1),
    td:nth-child(2),
    td:nth-child(4) {
      display: table-cell;
    }
  }
`;

export const RankIcon = styled.span`
  margin-left: 0.5rem;
  color: gold;
`;
export const BossGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const BossCard = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  height: 320px;
  gap: 0.5rem;
`;

export const BossTitle = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;


export const BossSubtitle = styled.div`
  font-size: 0.8rem;
  padding-top: 0.25rem;
  color: rgba(255, 255, 255, 0.75);

  span {
    display: block;
  }
`;
export const PlayerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
export const PlayerPopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99999;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlayerPopup = styled.div`
  width: 320px;
  background: rgba(10, 10, 15, 0.98);
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 10px;
  padding: 1rem;
  color: white;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9);
`;

export const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.1rem;
  color: gold;
  margin-bottom: 0.75rem;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #aaa;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const PopupSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const PopupRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;

  span {
    opacity: 0.85;
  }

  strong {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0.75rem 0;
`;

export const PlayerCard = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 420px; 
`;

export const PlayerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 auto;
`;

export const NameWithTooltip = styled.div`
  position: relative;
  display: inline-block;
  z-index: 99999;
`;

export const PlayerTooltip = styled.div`
  position: absolute;
  z-index: 9999;
  top: 120%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 200px;

  background: rgba(10, 10, 15, 0.95);
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 0.75rem;
  color: #fff;

  z-index: 999;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.7);
  pointer-events: none;

  opacity: 0;
  transform: translate(-50%, -6px);
  transition: opacity 0.2s ease, transform 0.2s ease;

  ${NameWithTooltip}:hover & {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  /* Arrow pointing UP */
  &:after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent rgba(10, 10, 15, 0.95) transparent;
  }
`;

export const TooltipRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0;

  span {
    opacity: 0.85;
  }

  strong {
    color: ${({ theme }) => theme.primary};
  }
`;
export const PlayerTitle = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;

export const PlayerSubtitle = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.75);
`;

export const BossHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 auto; 
  text-align: left;
`;

export const BossText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

export const BossTableWrapper = styled.div`
  overflow-y: auto;
  flex: 1;
  overflow-x: visible;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
`;
