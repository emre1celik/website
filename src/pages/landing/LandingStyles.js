import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { keyframes } from "styled-components";

const shine = keyframes`
  0% {
    transform: translateX(-120%);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    transform: translateX(120%);
    opacity: 0.8;
  }
  100% {
    transform: translateX(120%);
    opacity: 0;
  }
`;

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${({ theme }) => theme?.background});
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
  position: relative;

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
    text-shadow: 0 0 10px rgba(97, 97, 91, 0.6), 0 4px 20px rgba(0, 0, 0, 0.9);
  }

  p {
    font-size: clamp(1rem, 2.5vw, 1.3rem);
    margin-bottom: 2rem;
    max-width: 600px;
    text-shadow: 0 0 10px rgba(97, 97, 91, 0.6), 0 4px 20px rgba(0, 0, 0, 0.9);
  }
`;

export const LandingButtons = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;

    a {
      width: 100%;
    }

    button {
      width: 100%;
      justify-content: center;
    }
  }
`;
export const LandingFeatures = styled.div`
  margin-top: 5.5rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(160px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const FeatureCard = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.45);
  border-radius: 14px;
  padding: 2.2rem 1.2rem 1.4rem;
  text-align: center;

  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px) scale(1.03);
  }
`;

export const FeatureIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: -22px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;

  background: ${({ theme }) => theme.primary};
  color: #ffffffff;
  padding: 0.6rem;
  border-radius: 50%;

  box-shadow: 0 0 12px ${({ theme }) => theme.primary},
    0 4px 10px rgba(0, 0, 0, 0.8);
`;

export const FeatureTitle = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.4rem;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 40px;
    height: 2px;
    margin: 6px auto 0;
    background: linear-gradient(
      to right,
      transparent,
      ${({ theme }) => theme.primary},
      transparent
    );
  }
`;

export const FeatureText = styled.div`
  font-size: 0.95rem;
  opacity: 0.9;
`;

export const LandingButtonLabel = styled.div`
  @media (max-width: 620px) {
    display: none;
  }
`;

export const LandingButton = styled.button`
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2.2rem;
  font-size: 1.3rem;
  font-weight: bold;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  cursor: pointer;

  color: white;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.primary}
  );

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6), 0 0 12px rgba(255, 255, 255, 0.15);

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px) scale(1.04);
  }
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8),
    0 0 18px ${({ theme }) => theme.primary};

  &:active {
    transform: translateY(0) scale(0.98);
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
