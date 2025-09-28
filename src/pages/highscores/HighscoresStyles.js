import styled from "styled-components";
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
`;

export const HighscoresContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
`;

export const HighscoresBox = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem 3rem;
  border-radius: 10px;
  width: 100%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    color: white;
  }
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

  /* Hide columns on smaller screens */
  @media (max-width: 1300px) {
    .hideOnSmall {
      display: none;
    }
  }
`;

export const RankIcon = styled.span`
  margin-left: 0.5rem;
  color: gold;
`;
