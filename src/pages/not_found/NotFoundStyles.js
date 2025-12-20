import styled from "styled-components";
import backgroundImg from "../../assets/images/2151470664.jpg";

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  user-select: none;
  font-family: "AlbertusMedium", Arial, sans-serif;
`;

export const NotFoundContent = styled.header`
  flex: 1;
  display: flex;
  flex-direction: column;
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
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  max-height: calc(100vh - 60px - 50px);
  padding: 2rem;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 432px) {
    max-height: calc(100vh - 50px - 50px);
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
