import styled from "styled-components";

/* =============================
   PAGE WRAPPER
============================= */

export const InfoWrapper = styled.div`
  min-height: 100vh;
  background-image: url(${({ theme }) => theme?.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  user-select: none;
  display: flex;
  flex-direction: column;
`;

/* =============================
   HERO / CONTENT AREA
============================= */

export const InfoHero = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 1rem 1.5rem;

  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
  }
`;

/* =============================
   MAIN CONTENT BOX
============================= */

export const InfoBox = styled.div`
  width: 100%;
  max-width: 1100px;

  /* 👇 This is the key part */
  max-height: calc(100vh - 180px);
  overflow-y: auto;

  background: rgba(0, 0, 0, 0.75);
  border-radius: 16px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.75);
  animation: fadeInUp 0.6s ease both;

  @media (max-width: 768px) {
    max-height: calc(100vh - 140px);
    padding: 2rem 1.25rem;
    border-radius: 12px;
  }

  h2 {
    font-size: 2.4rem;
    text-align: center;
    margin-bottom: 1.25rem;
  }

  p {
    font-size: 15px;
    line-height: 1.7;
    color: #d0d0d0;
  }

  /* =============================
     CUSTOM SCROLLBAR
  ============================= */

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
`;

/* =============================
   ACCORDION BUTTON
============================= */

export const SectionButton = styled.button`
  width: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.55)
  );
  color: white;
  border: 1px solid #555;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  margin-top: 1.25rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-1px);
  }
`;

/* =============================
   ACCORDION CONTENT
============================= */

export const SectionContent = styled.div`
  margin-top: 0.75rem;
  padding: 1.75rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  animation: fadeIn 0.25s ease;

  p {
    margin-bottom: 1rem;
  }

  ul {
    padding-left: 1rem;
  }

  li {
    margin-bottom: 0.45rem;
    line-height: 1.6;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

/* =============================
   SEARCH
============================= */

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.9rem 1rem;
  margin: 1rem 0;
  border-radius: 10px;
  border: 1px solid #555;
  outline: none;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.8);
  color: white;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: grey;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.12);
  }
`;

export const ResultBox = styled.div`
  margin-top: 0.75rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.65);
  border-radius: 10px;
  font-size: 14px;
`;

export const ResultItem = styled.div`
  border: 1px solid #555;
  border-radius: 10px;
  padding: 0.9rem;
  margin-bottom: 0.75rem;
  background: rgba(0, 0, 0, 0.55);
  transition: border 0.2s ease, background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: ${({ theme }) => theme?.primary || "#aaa"};
  }
`;

/* =============================
   PAGINATION
============================= */

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  gap: 0.75rem;
`;

export const PageButton = styled.button`
  padding: 0.55rem 1.1rem;
  border-radius: 8px;
  border: 1px solid #555;
  background: rgba(0, 0, 0, 0.65);
  color: white;
  cursor: pointer;
  font-size: 13px;
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
  font-size: 13px;
`;
