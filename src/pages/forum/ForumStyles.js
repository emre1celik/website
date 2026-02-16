import styled from "styled-components";

/* Layout */

export const ForumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${({ theme }) => theme?.background});
  background-size: cover;
  color: white;
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
`;

/* Cards */

export const CategoryCard = styled.div`
  position: relative;
  border-radius: 14px;
  padding: 0.9rem 1rem;
  background: rgba(255, 255, 255, 0.04);
`;

export const CategoryHeader = styled.div`
  font-weight: 800;
  color: ${({ theme }) => theme.primary || "#ffcc00"};
`;

export const CategoryDescription = styled.div`
  font-size: 0.9rem;
  opacity: 0.85;
  margin-bottom: 8px;
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
`;

export const NewThreadTextarea = styled.textarea`
  padding: 0.6rem;
  border-radius: 8px;
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
