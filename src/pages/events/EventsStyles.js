import styled from "styled-components";

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
  align-items: flex-start;
  padding: 2.5rem 1rem;
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
  max-height: 78vh;
  padding: 1.5rem 1.5rem 1.8rem;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
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
    position: sticky;
    top: 0;
    background: rgba(0, 0, 0, 0.4);
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
    transition: background 0.2s ease, transform 0.15s ease;
  }

  tbody tr:nth-child(odd) {
    background: rgba(255, 255, 255, 0.03);
  }

  tbody tr:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: scale(1.01);
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

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.35);
    border-radius: 6px;
  }
`;

/* 🔹 Tooltip styles */

export const EventNameWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: help;

  color: #fff;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary || "#ffcc00"};
    transform: translateY(-1px);
  }

  &:hover > div {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, -10px);
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 150%;
  transform: translate(-50%, 0);
  background: rgba(0, 0, 0, 0.95);
  border: 1px solid #555;
  border-radius: 10px;
  padding: 0.6rem 0.7rem;
  width: 200px;
  font-size: 0.8rem;
  color: #fff;
  z-index: 9999;
  pointer-events: none;
  text-shadow: none;
  font-weight: normal;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);

  strong {
    color: ${({ theme }) => theme.primary || "#ffcc00"};
    display: block;
    margin-bottom: 0.3rem;
  }

  span {
    display: block;
    margin-bottom: 0.3rem;
    line-height: 1.3;
  }
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  background: ${({ variant }) =>
    variant === "now"
      ? "linear-gradient(135deg, #ff512f, #dd2476)"
      : "rgba(255,255,255,0.15)"};

  color: #fff;
  box-shadow: ${({ variant }) =>
    variant === "now" ? "0 0 12px rgba(255,80,80,0.8)" : "none"};
`;

export const Timer = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: #ffcc00;
`;
