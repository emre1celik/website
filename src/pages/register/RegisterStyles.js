import styled from "styled-components";

export const RegisterWrapper = styled.div`
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

export const RegisterContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
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
  box-sizing: border-box;
  position: relative;
  min-height: 0; /* crucial for flex children with overflow */

  @media (max-width: 432px) {
    padding: 1rem;
  }
`;

export const RegisterBox = styled.div`
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.12);
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
      background-color: ${({ theme }) => theme.primary};
      color: white;
      transition: 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.primaryHover};
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
        color: ${({ theme }) => theme.primary};
        text-decoration: underline;
      }
    }
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.35);
    border-radius: 3px;
  }
`;
