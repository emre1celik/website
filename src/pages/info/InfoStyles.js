import styled from "styled-components";
import backgroundImg from "../../assets/images/2151470664.jpg";

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${({ theme }) => theme.background});
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

export const InfoBox = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  text-align: center;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  font-size: 14px;
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
  text-align: left;
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  overflow-y: auto;
  box-sizing: border-box;
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

  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: white;
  }

  p {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    color: #ccc;
  }
`;
