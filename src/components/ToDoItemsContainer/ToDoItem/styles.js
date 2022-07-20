import styled, { css } from 'styled-components';
import closeIcon from '../../../assets/svg/inverted-close-icon.svg';
import uncheckedIcon from '../../../assets/svg/checkbox-unchecked.svg';
import checkedIcon from '../../../assets/svg/checkbox-checked.svg';

export const StyledToDoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.3125rem 0 0.875rem;
`;
export const StyledCheckbox = styled.div`
  cursor: pointer;
  display: flex;
  flex: 0 1 auto;
  background-position: center;
  background-size: 18px 18px;
  background-repeat: no-repeat;
  background-image: url(${uncheckedIcon});

  ${({ check }) => check
    && css`
      background-image: url(${checkedIcon});
    `};
    
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

  ${({ check }) => check
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
