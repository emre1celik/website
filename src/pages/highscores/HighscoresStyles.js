import styled, { keyframes, css } from "styled-components";
import backgroundImg from "../../assets/images/2151470664.jpg";

export const HighscoresWrapper = styled.div`
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

export const HighscoresContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
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
  ${({ rank }) =>
    rank === 0 &&
    css`
      color: gold;
      animation: ${goldGlow} 2s ease-in-out infinite alternate;
    `}
  ${({ rank }) =>
    rank === 1 &&
    css`
      color: silver;
      animation: ${silverGlow} 2s ease-in-out infinite alternate;
    `}
  ${({ rank }) =>
    rank === 2 &&
    css`
      color: #cd7f32;
      animation: ${bronzeGlow} 2s ease-in-out infinite alternate;
    `}
`;

export const HighscoresBox = styled.div`
  padding: 2rem 3rem;
  border-radius: 10px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;

  max-height: 75vh;
  overflow-y: auto;
  height: 700px;

  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    rgba(0, 0, 0, 0.7);

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
    background: #666;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #666;
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

  label {
    font-weight: bold;
    color: #fff;
  }

  select {
    background: #222;
    color: #fff;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #555;
    cursor: pointer;
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

  th,
  td {
    padding: 0.75rem;
    border-bottom: 1px solid #444;
  }

  th {
    color: #4caf50;
    text-transform: uppercase;
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
    th:nth-child(n+3), /* hide Class (3) */
    td:nth-child(n+3) {
      /* hide all columns after Name */
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
