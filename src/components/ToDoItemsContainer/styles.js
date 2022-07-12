import styled, { css } from 'styled-components';
import plusIcon from '../../assets/svg/notecard/plus-icon.svg';
import unchecked from '../../assets/svg/checkbox-unchecked.svg';
import checked from '../../assets/svg/checkbox-checked.svg';
import arrowIcon from '../../assets/svg/list-arrow-icon.svg';
import closeIcon from '../../assets/svg/inverted-close-icon.svg';

export const StyledToDoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.3125rem 0 0.875rem;
`;

export const StyledToDoItemPlaceholder = styled(StyledToDoItem)`
  background-position: left;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-image: url(${plusIcon});
  padding: 0.5rem 2rem;
  margin-left: 0.9rem;
`;

export const StyledCheckbox = styled.div`
  cursor: pointer;
  display: flex;
  flex: 0 1 auto;
  background-position: center;
  background-size: 18px 18px;
  background-repeat: no-repeat;
  ${({ check }) => (check === 'false'
    ? css`
          background-image: url(${unchecked});
        `
    : css`
          background-image: url(${checked});
        `)};
  margin: 0.1875rem 0.375rem 0 0;
  width: 1.5rem;
  aspect-ratio: 1;
  outline: 0;
  opacity: 0.5;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledLabel = styled.span`
  border: none;
  outline: none;
  flex: 1 1 auto;
  color: var(--tc-gray-2);
  font-size: 12px;
  font-family: var(--ff-roboto);
  font-weight: 400;
  letter-spacing: 0.3px;
  line-height: 1rem;
  display: block;
  height: 16px;
  overflow: hidden;
  resize: none;
  padding: 2px;
  color: var(--tc-gray-2);

  ${({ check }) => check === 'true'
    && css`
      text-decoration: line-through;
      user-select: none;
    `};

  @media screen and (min-width: 900px) {
    font-family: var(--ff-roboto);
    font-size: 14px;
  }
`;
export const StyledTextarea = styled.textarea`
  font-size: 12px;
  font-family: var(--ff-roboto);
  color: var(--tc-dark-gray);
  background-color: transparent;
  outline: 0px;
  border: none;
  flex: 1;
  resize: none;
  width: 100%;
  height: 1rem;
  overflow: hidden;
  overflow-wrap: break-word;
  white-space: normal;

  @media screen and (min-width: 900px) {
    font-family: var(--ff-roboto);
    font-size: 14px;
  }
`;

export const ToDoItemDeleteBtn = styled.div`
  cursor: pointer;
  display: none;
  align-items: flex-end;
  justify-content: center;
  border: 1px solid transparent;
  background-image: url(${closeIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 22px 22px;
  width: 1.625rem;
  opacity: 0;
  border-radius: 50%;
  aspect-ratio: 1;
  transition: opacity 200ms;
  margin-right: 0.5rem;
  
  ${StyledToDoItem}:hover > & {
    display: flex;
    opacity: 0.5;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const CompletedItemsArea = styled.div`
  display: block;
`;
export const CompletedItemsSeparator = styled.div`
  border-top: 1px solid var(--c-gray);
  margin: 0.5rem 0rem 0 0.5rem;
  width: 95%;
`;
export const CompletedItemsToggle = styled.div`
  display: flex;
  padding: 0.625rem 0.3125rem 0rem;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export const CompletedItemsBtn = styled.div`
  cursor: pointer;
  background-image: url(${arrowIcon});
  opacity: 0.5;
  border: 1px solid transparent;
  background-position: center;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 150ms;
  &:hover,
  &:focus {
    background-color: var(--c-gray);
  }
  ${({ show }) => show
    && css`
      transform: rotate(90deg);
    `}
`;
export const CompletedItemsLabel = styled.span`
  cursor: pointer;
  user-select: none;
  font-family: var(--ff-roboto);
  font-size: 13px;
  color: var(--tc-gray-1);
  &:hover,
  &:focus {
    color: var(--tc-dark-gray);
  }
`;
export const CompletedItemsList = styled.div`
  display: flex;
  flex-direction: column;
`;
