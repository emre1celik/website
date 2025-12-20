// src/pages/events/EventsStyles.js
import styled from "styled-components";

// Page wrapper with background
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

// Main content area
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

// Container box
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
  &::-webkit-scrollbar-thumb:hover {
    background: #666;
  }
`;

// Fade effect for bottom scroll
export const BottomFade = styled.div`
  position: sticky;
  bottom: -40px;
  left: 0;
  width: 100%;
  height: 50px;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.85) 100%
  );
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 5;
`;

// Event countdown box
export const EventCard = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #444;
  border-radius: 8px;
  padding: 1rem 2rem;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 600px;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.primary};
  }

  p {
    font-size: 1.2rem;
    color: #fff;
    margin: 0.25rem 0;
  }
`;

// Timer styling
export const Timer = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffcc00;
`;
