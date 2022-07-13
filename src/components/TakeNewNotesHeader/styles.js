import styled from 'styled-components';
import Button from '../Button';
import plusIcon from '../../assets/svg/notecard/plus-icon.svg';
import listIcon from '../../assets/svg/new-list-icon.svg';

export const StyledNewNoteHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem 0 0.5rem;
`;

const StyledButton = styled(Button)`
  cursor: pointer;
  display: flex;
  background-repeat: no-repeat;
  align-items: center;
  border-radius: 3rem;
  flex: 1 0 auto;

  &:hover {
    opacity: 1;
    background-color: var(--c-off-white-1);
  }
`;

export const TakeaNoteButton = styled(StyledButton)`
  background-image: url(${plusIcon});
  background-position: 0.5rem;
  background-size: 24px;
  padding-left: 2rem;
  color: var(--tc-gray-2);
  font-family: var(--ff-google);
  font-size: 14px;
  font-weight: 500;
  width: 300px;
`;

export const CreateListButton = styled(StyledButton)`
  background-image: url(${listIcon});
  background-position: center;
  background-size: 20px;
  opacity: 0.6;
  height: 1.25rem;
  width: 1.25rem;
  padding: 1.25rem;
  justify-content: center;
`;
