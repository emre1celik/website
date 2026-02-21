import styled from "styled-components";

/* Page layout */

export const EventsWrapper = styled.div`
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

export const EventsContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 2.5rem 1rem;
  overflow: hidden;

  animation: fadeInUp 0.8s ease both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(25px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const EventsBox = styled.div`
  width: 100%;
  max-width: 720px;
  height: 79vh;

  padding: 1.5rem;
  border-radius: 18px;

  display: flex;
  flex-direction: column;

  overflow-y: auto;

  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.12);
  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 2.1rem;
    letter-spacing: 1px;
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.8);
    flex-shrink: 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    font-size: 0.95rem;
  }

  thead th {
    top: 0;
    background: rgba(0, 0, 0, 0.55);
    padding: 0.75rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 1px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    z-index: 5;
  }

  thead th:first-child {
    border-top-left-radius: 12px;
  }

  thead th:last-child {
    border-top-right-radius: 12px;
  }

  tbody tr {
    transition: background 0.2s ease;
  }

  tbody tr:nth-child(odd) {
    background: rgba(255, 255, 255, 0.03);
  }

  td {
    padding: 0.65rem 0.5rem;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  td:first-child {
    text-align: left;
    padding-left: 0.75rem;
  }

  /* Scrollbar */

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.35);
    border-radius: 6px;
  }
`;

/* Clickable event name */

export const EventNameButton = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  color: ${({ $open, theme }) => ($open ? theme.primary || "#ffcc00" : "#fff")};

  font-weight: 700;
  transition: color 0.15s ease, transform 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.primary || "#ffcc00"};
  }

  ${({ $open }) =>
    $open &&
    `
      transform: translateY(-1px);
    `}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary || "#ffcc00"};
    outline-offset: 3px;
    border-radius: 8px;
  }
`;

export const Chevron = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  transition: transform 0.18s ease, opacity 0.18s ease;

  transform: rotate(${({ open }) => (open ? "90deg" : "0deg")});
  opacity: ${({ open }) => (open ? 1 : 0.6)};
`;

/* Details row */

export const DetailsRow = styled.tr`
  background: rgba(255, 255, 255, 0.04);
`;

export const DetailsCell = styled.td`
  padding: 0.85rem 0.9rem;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const DetailsCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(0, 0, 0, 0.35);
  border-radius: 14px;
  padding: 0.85rem 0.9rem;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.4);
`;

export const DetailsTitle = styled.div`
  font-weight: 800;
  color: ${({ theme }) => theme.primary || "#ffcc00"};
  margin-bottom: 0.45rem;
  letter-spacing: 0.2px;
`;

export const InfoList = styled.div`
  display: grid;
  gap: 0.45rem;
`;

export const InfoItem = styled.div`
  display: grid;
  grid-template-columns: 18px auto;
  gap: 10px;
  align-items: start;
  line-height: 1.35;
  font-size: 0.9rem;

  b {
    font-weight: 800;
  }
`;
