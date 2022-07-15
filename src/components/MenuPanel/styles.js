import styled from 'styled-components';
import Button from '../Button';

export const NoteCardMenuPanel = styled.div`
  cursor: pointer;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: var(--c-white);
  flex-direction: column;
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;
  padding: 0.375rem 0 0.375rem 0;
  user-select: none;
  overflow: visible;
  z-index: 300;
`;

export const MenuPanelOption = styled(Button)`
  color: var(--tc-dark-gray);
  font-family: var(--ff-roboto);
  font-size: 13px;
  position: relative;
  padding: 0.375rem 1.5rem 0.375rem 1.5rem;
  &:hover {
    background-color: var(--c-light-gray);
  }
`;
