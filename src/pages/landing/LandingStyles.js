import styled from "styled-components";
import backgroundImg from "../../assets/images/2151470664.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LandingWrapper = styled.div`
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

export const LandingHero = styled.header`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 432px) {
    padding: 1rem;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
`;

export const LandingButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const LandingButtonLabel = styled.div`
  @media (max-width: 620px) {
    display: none;
  }
`;

export const LandingButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  font-size: 1.3rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s, transform 0.2s;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.6);
  }

  &.download {
    background-color: #4caf50;
    color: white;

    &:hover {
      background-color: #449d46;
    }
  }

  &.register {
    background-color: #4caf50;
    color: white;

    &:hover {
      background-color: #449d46;
    }
  }
`;

export const LandingFooter = styled.footer`
  text-align: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  position: relative;
  z-index: 2;
`;

export const ResponsiveIcon = styled(FontAwesomeIcon)`
  margin-right: 0;

  @media (min-width: 420px) {
    margin-right: 16px;
  }
`;
