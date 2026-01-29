import styled from "styled-components";

export const DownloadsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${({ theme }) => theme?.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.text};
  user-select: none;
`;

export const DownloadsHero = styled.header`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;

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
`;
export const SystemRequirements = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.4rem;
    color: #fff;
    text-align: center;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
  }

  th,
  td {
    padding: 0.6rem 0.75rem;
    text-align: left;
  }

  th {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    font-weight: 600;
  }

  td {
    background: rgba(0, 0, 0, 0.35);
    color: #ccc;
  }

  tr:not(:last-child) td {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  th:not(:last-child),
  td:not(:last-child) {
    border-right: 1px solid rgba(255, 255, 255, 0.05);
  }

  .recommended {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
  }
`;

export const DownloadsBox = styled.div`
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 75vh;
  overflow-y: auto;
  box-sizing: border-box;
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
export const DownloadsMirrorButton = styled.a`
  text-decoration: none;
  width: 100%;
  margin: 0.4rem 0;
  display: block;

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 0.75rem;
    padding: 0.6rem 1rem;

    border: 1px solid grey;
    border-radius: 8px;

    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05),
      rgba(0, 0, 0, 0.4)
    );

    color: #fff;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;

    backdrop-filter: blur(2px);
    transition: all 0.25s ease;

    &:hover {
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.12),
        rgba(0, 0, 0, 0.6)
      );
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
      border-color: ${({ theme }) => theme.primary};
    }

    span.left {
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }

    span.right {
      opacity: 0.7;
      font-size: 0.85rem;
    }
  }
`;

export const DownloadsNote = styled.p`
  font-size: 0.85rem;
  color: #ccc;
  margin-top: 1rem;

  strong {
    color: #fff;
  }

  a.theme-link {
    color: ${({ theme }) => theme?.primary || "#4caf50"};
    text-decoration: none;
    font-weight: bold;
    transition: color 0.2s;

    &:hover {
      text-decoration: underline;
      opacity: 0.9;
    }
  }
`;
