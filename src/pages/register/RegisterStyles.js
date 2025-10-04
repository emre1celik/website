import styled from "styled-components";
import backgroundImg from "../../assets/images/2151470664.jpg";

export const RegisterWrapper = styled.div`
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

export const RegisterContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  position: relative;
  min-height: 0; /* crucial for flex children with overflow */

  @media (max-width: 432px) {
    padding: 1rem;
  }
`;

export const RegisterBox = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 3rem 2rem;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 80vh;
  overflow-y: auto;
  box-sizing: border-box;

  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: white;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: 0.75rem 1rem;
      border: none;
      border-radius: 5px;
      font-family: "AlbertusMedium", Arial, sans-serif;
      font-size: 1rem;

      &:focus {
        outline: none;
        box-shadow: 0 0 5px #fff;
      }
    }

    button {
      padding: 0.75rem;
      font-size: 1.1rem;
      font-weight: bold;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: #4caf50;
      color: white;
      transition: 0.3s;

      &:hover {
        background-color: #449d46;
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    p {
      font-size: 0.85rem;
      color: #ccc;
      margin-top: 0.5rem;
      text-align: center;

      a {
        color: #4caf50;
        text-decoration: underline;
      }
    }
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }
`;
