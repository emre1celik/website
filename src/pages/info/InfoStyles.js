import styled from "styled-components";
import backgroundImg from "../../assets/images/2151470664.jpg";

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  user-select: none;
`;

export const InfoHero = styled.header`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;

  @media (max-width: 432px) {
    padding: 1rem;
  }
`;
