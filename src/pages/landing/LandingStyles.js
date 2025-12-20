import styled from "styled-components";
import backgroundImg from "../../assets/images/2151470664.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${({ theme }) => theme.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.text};
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

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 1rem;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
  }

  p {
    font-size: clamp(1rem, 2.5vw, 1.3rem);
    margin-bottom: 2rem;
    max-width: 600px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
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
  color: white;
  background: ${({ theme }) => theme.primary};
  transition: 0.3s, transform 0.2s;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.6);
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
