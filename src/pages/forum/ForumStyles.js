import styled from "styled-components";

/* Layout */

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
`;

export const ForumContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 2.5rem 1rem;
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
  border: 1px solid rgba(255, 255, 255, 0.12);
  
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

`;

/* Cards */

export const CategoryCard = styled.div`
  position: relative;
  border-radius: 14px;
  padding: 0.9rem 1rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
`;

export const CategoryHeader = styled.div`
  font-weight: 800;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.primary || "#ffcc00"};
`;

export const CategoryDescription = styled.div`
  font-size: 0.9rem;
  opacity: 0.85;
  margin-top: 4px;
`;

/* Threads */

export const ThreadRow = styled.div`
  padding: 0.45rem 0.6rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const ThreadTitle = styled.span`
  font-weight: 600;
  font-size: 0.85rem;
`;

export const ThreadRight = styled.div`
  display: flex;
  gap: 10px;
  font-size: 0.85rem;
`;

export const ThreadAuthor = styled.span`
  opacity: 0.7;
`;

/* Replies */

export const ReplyItem = styled.div`
  position: relative;
  margin-bottom: 12px;
`;

export const ReplyMeta = styled.div`
  font-size: 0.75rem;
  opacity: 0.6;
  margin-bottom: 4px;
`;

export const ReplyActions = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 8px;
  opacity: 0;

  ${ReplyItem}:hover & {
    opacity: 1;
  }
`;

/* Buttons */

export const IconButton = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 0.85rem;
  opacity: 0.75;

  &:hover {
    opacity: 1;
    color: ${({ theme, $danger }) =>
    $danger ? "#ff5f5f" : theme.primary || "#ffcc00"};
  }
`;

export const ButtonRow = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;
`;

export const ActionButton = styled.button`
  all: unset;
  padding: 0.45rem 0.7rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.65rem;
  font-weight: 700;
  background: ${({ theme }) => theme.primary || "#ffcc00"};
  color: ${({ theme }) => theme.primaryText};

  &:hover {
    opacity: 0.9;
  }
`;

/* Pagination */

export const PaginationRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 6px;
`;

export const PageButton = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 0.7rem;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 0.85)};

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  }
`;

export const PageIndicator = styled.div`
  font-size: 0.7rem;
  opacity: 0.7;
`;

/* Inputs */

export const NewThreadBox = styled.div`
  padding: 0.9rem;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ReplyBox = styled(NewThreadBox)`
  margin-top: 12px;
`;

export const NewThreadInput = styled.input`
  padding: 0.5rem;
  border-radius: 8px;
  border: none;
`;

export const NewThreadTextarea = styled.textarea`
  padding: 0.6rem;
  border-radius: 8px;
  border: none;
  resize: vertical;
  min-height: 90px;
`;

export const NewThreadActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const PinnedIcon = styled.span`
  font-size: 0.8rem;
  margin-right: 4px;
`;
