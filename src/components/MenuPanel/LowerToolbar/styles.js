import styled, { css } from 'styled-components';
import restoreIcon from '../../../assets/svg/notecard/restore-note-icon.svg';
import deleteIcon from '../../../assets/svg/notecard/delete-forever-icon.svg';
import colorPaletteIcon from '../../../assets/svg/notecard/color-palette-icon.svg';
import unarchiveIcon from '../../../assets/svg/notecard/unarchive-note-icon.svg';
import archiveIcon from '../../../assets/svg/notecard/archive-note-icon.svg';
import menuCirclesIcon from '../../../assets/svg/notecard/menu-circles-icon.svg';

export const NoteLowerToolbar = styled.div`
  padding: 0.5rem 0.5rem 0rem;
  gap: 0.5rem;
  display: none;
  opacity: 0;
  transition: opacity 200ms;
  @media screen and (min-width: 900px) {
    display: flex;
  }
  &:hover {
    opacity: 1;
  }
`;

export const LowerToolbarButton = styled.button`
  cursor: pointer;
  border : 0;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  color: #000;
  background-position: center;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  padding: 1rem;
  background-color: transparent;
  &:hover {
    opacity: 1;
    background-color: var(--c-light-gray);
  }
`;

export const RestoreButton = styled(LowerToolbarButton)`
  background-image: url(${restoreIcon});
`;

export const DeleteButton = styled(LowerToolbarButton)`
  background-image: url(${deleteIcon});
`;

export const ColorPaletteButton = styled(LowerToolbarButton)`
  background-image: url(${colorPaletteIcon});
`;

export const ArchiveButton = styled(LowerToolbarButton)`
  background-image: url(${archiveIcon});
  ${({ isArchived }) => isArchived
    && css`
      background-image: url(${unarchiveIcon});
    `}
`;

export const MenuButton = styled(LowerToolbarButton)`
  background-image: url(${menuCirclesIcon});
`;
