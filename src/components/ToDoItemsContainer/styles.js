import styled, { css } from 'styled-components';
import plusIcon from '../../assets/svg/notecard/plus-icon.svg';
import arrowIcon from '../../assets/svg/list-arrow-icon.svg';
import { StyledToDoItem } from './ToDoItem/styles';

export const StyledToDoItemPlaceholder = styled(StyledToDoItem)`
  background-position: left;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-image: url(${plusIcon});
  padding: 0.5rem 2rem;
  margin-left: 0.9rem;
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

export const CompletedItemsBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
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
