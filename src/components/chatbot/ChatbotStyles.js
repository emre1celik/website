import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const ChatbotAnimations = createGlobalStyle`
  .typing-dots::after {
    content: "";
    animation: typingDots 1.4s infinite;
  }

  @keyframes typingDots {
    0% { content: "."; }
    33% { content: ".."; }
    66% { content: "..."; }
    100% { content: "...."; }
  }
`;

export const Message = styled.div`
  margin-bottom: 0.6rem;
  color: ${({ bot }) => (bot ? "#aaa" : "white")};
`;

export const ChatWrapper = styled.div`
  position: fixed;
  bottom: 90px;
  right: 24px;
  width: 320px;
  max-height: 420px;
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid #555;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 999;
`;

export const ChatHeader = styled.div`
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.85);
  font-weight: bold;
  border-bottom: 1px solid #444;
`;

export const Messages = styled.div`
  flex: 1;
  padding: 0.75rem;
  overflow-y: auto;
  font-size: 14px;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(71, 71, 71, 0.85);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(71, 71, 71, 0.85);
  }
`;
export const MessageRow = styled.div`
  margin-bottom: 0.7rem;
  text-align: left;
`;

export const MessageLabel = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 2px;
  color: ${({ bot, theme }) =>
    bot ? theme.primary : "rgba(255, 255, 255, 0.65)"};
`;

export const MessageText = styled.div`
  color: ${({ bot }) => (bot ? "#d0d0d0" : "white")};
  line-height: 1.5;
`;

export const InputWrapper = styled.form`
  display: flex;
  border-top: 1px solid #444;
`;
export const MessageTime = styled.span`
  margin-left: 6px;
  font-size: 11px;
  font-weight: normal;
  opacity: 0.55;
`;
export const Input = styled.input`
  flex: 1;
  padding: 0.6rem;
  border: none;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  outline: none;
`;

export const Send = styled.button`
  padding: 0 1rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const ChatButton = styled.button`
  position: fixed;
  bottom: 15px;
  right: 15px;
  background: ${({ theme }) => theme.primary};
  color: black;
  border: none;
  border-radius: 50px;
  padding: 0.8rem 1.1rem;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  z-index: 998;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 680px) {
    span {
      display: none;
    }
  }
`;
