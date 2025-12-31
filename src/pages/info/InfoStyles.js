import styled from "styled-components";

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${({ theme }) => theme?.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  user-select: none;
`;
export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75rem;
  gap: 0.5rem;
`;

export const PageButton = styled.button`
  padding: 0.4rem 0.9rem;
  border-radius: 6px;
  border: 1px solid #555;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.1);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const PageInfo = styled.span`
  color: #aaa;
  font-size: 12px;
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
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 2rem;
  text-align: center;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  font-size: 14px;
  animation: fadeInUp 0.8s ease both;
  text-align: left;
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  overflow-y: auto;
  box-sizing: border-box;

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

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.35);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.35);
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

/* 🆕 Accordion styles */

export const SectionButton = styled.button`
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: 1px solid #555;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  margin-top: 0.75rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const SectionContent = styled.div`
  padding: 1rem;
  margin-top: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

/* 🆕 Drop search styles */

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  margin: 0.5rem 0 0.5rem;
  border-radius: 8px;
  border: 1px solid #555;
  outline: none;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  transition: all 0.2s ease;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: grey;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
  }
`;
export const ResultItem = styled.div`
  border: 1px solid #555;
  border-radius: 6px;
  padding: 0.75rem;
  margin-bottom: 0.75rem;
  background: rgba(0, 0, 0, 0.5);
  transition: border 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme?.primary || "#aaa"};
  }
`;

export const ResultBox = styled.div`
  background: rgba(0, 0, 0, 0.65);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 0.5rem;
  font-size: 13px;

  strong {
    font-size: 14px;
  }

  ul {
    margin-top: 0.5rem;
    padding-left: 1rem;
  }

  li {
    margin-bottom: 0.3rem;
    color: #ddd;
  }
`;
