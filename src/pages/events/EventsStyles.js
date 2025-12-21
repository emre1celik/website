// src/pages/events/EventsStyles.js
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
`;

export const EventsBox = styled.div`
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;
  max-width: 600px;
  max-height: 75vh;
  overflow-y: auto;

  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    rgba(0, 0, 0, 0.7);

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    color: white;
    flex-shrink: 0;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 4px;
  }
`;

/* 🔹 Tooltip styles */

export const EventNameWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: help;

  color: #ffffffff;
  font-weight: 600;
  border-bottom: 1px dotted rgba(255, 255, 255, 0.6);
  transition: all 0.2s ease;

  &:hover {
    color: #ffffffff;
    text-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
    transform: scale(1.03);
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
  left: 50%;
  transform: translate(-50%, 0);
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid #555;
  border-radius: 8px;
  padding: 0.55rem;
  width: 180px;
  font-size: 0.8rem;
  color: #fff;
  z-index: 9999;
  pointer-events: none;
  text-shadow: none;
  font-weight: normal;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;

  strong {
    color: ${({ theme }) => theme.primary};
    display: block;
    margin-bottom: 0.25rem;
  }

  span {
    display: block;
    margin-bottom: 0.25rem;
  }
`;

export const Timer = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffcc00;
`;
