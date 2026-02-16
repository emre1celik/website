import styled from "styled-components";

/* Page layout */

export const ForumWrapper = styled.div`
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

export const ForumContent = styled.main`
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

export const ForumBox = styled.div`
  width: 100%;
  max-width: 900px;
  height: 72vh;

  padding: 1.5rem;
  border-radius: 18px;

  display: flex;
  flex-direction: column;
  gap: 14px;

  overflow-y: auto;

  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.12);

  h2 {
    text-align: center;
    margin-bottom: 0.5rem;
    font-size: 2.1rem;
    letter-spacing: 1px;
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.8);
    flex-shrink: 0;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.35);
    border-radius: 6px;
  }
`;

/* Forum content */

export const CategoryCard = styled.div`
  border-radius: 14px;
  position: relative;
  padding: 0.9rem 1rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
`;

export const CategoryHeader = styled.div`
  font-weight: 800;
  font-size: 1.05rem;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.primary || "#ffcc00"};
`;

export const CategoryDescription = styled.div`
  font-size: 0.9rem;
  opacity: 0.85;
  margin-bottom: 8px;
`;

export const ThreadRow = styled.div`
  padding: 0.45rem 0.6rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const ThreadTitle = styled.span`
  font-weight: 600;
`;

export const ThreadAuthor = styled.span`
  opacity: 0.7;
`;
export const ReplyMeta = styled.div`
  font-size: 0.75rem;
  opacity: 0.6;
  margin-bottom: 4px;
`;

export const ButtonRow = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;
`;

export const ActionButton = styled.button`
  all: unset;
  padding: 0.5rem 0.7rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.65rem;
  font-weight: 700;
  background: ${({ theme }) => theme.primary || "#ffcc00"};
  color: ${({ theme }) => theme.primaryText};
transition: transform 0.15s ease, opacity 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.9;
}
`;
/* Thread actions */

export const ThreadRight = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;
// FIRST define NewThreadBox
export const NewThreadBox = styled.div`
  padding: 0.9rem;
  border-radius: 14px;
  background: rgba(195, 111, 111, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ReplyActions = styled.div`
 position: absolute;
 top: 12px;
 right: 12px;
 display: flex;
 gap: 8px;
 opacity: 0;
 transition: opacity 0.15s ease;
`;

export const ReplyItem = styled.div`
  margin-bottom: 10px;

  &:hover ${ReplyActions} {
    opacity: 1;
  }
`;
// THEN extend it
export const ReplyBox = styled(NewThreadBox)`
  margin-top: 12px;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const ThreadActions = styled.div`
display: flex;
gap: 8px;
opacity: 0;
transition: opacity 0.15s ease;

  ${ThreadRow}: hover & {
    opacity: 1;
}
    `;
export const NewThreadTextarea = styled.textarea`
  padding: 0.6rem 0.7rem;
  border-radius: 8px;
  border: none;
  font-family: inherit;
  font-size: 0.9rem;
  resize: vertical;
  min-height: 90px;
`;

export const SectionDivider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
  margin: 0.6rem 0;
`;

export const IconButton = styled.button`
all: unset;
cursor: pointer;
font-size: 0.85rem;
opacity: 0.75;
display: flex;
align-items: center;

  &:hover {
    opacity: 1;
    color: ${({ theme, $danger }) =>
    $danger ? "#ff5f5f" : theme.primary || "#ffcc00"
  };
}
`;

export const NewThreadInput = styled.input`
padding: 0.5rem 0.6rem;
border-radius: 8px;
border: none;
font-family: inherit;
font-size: 0.9rem;
`;

export const NewThreadActions = styled.div`
display: flex;
gap: 8px;
justify-content: flex-end;
`;

export const PinnedIcon = styled.span`
font-size: 0.8rem;
opacity: 0.85;
color: ${({ theme }) => theme.primary || "#ffcc00"};
`;
