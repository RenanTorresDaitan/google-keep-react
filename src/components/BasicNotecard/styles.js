import styled, { css } from 'styled-components';
import Button from '../Button';
import pinIcon from '../../assets/svg/notecard/pin-icon.svg';
import menuCirclesIcon from '../../assets/svg/notecard/menu-circles-icon.svg';
import colorDropIcon from '../../assets/svg/notecard/drop-icon.svg';
import largePinIcon from '../../assets/svg/notecard/pin-large-icon.svg';
import largePinPinnedIcon from '../../assets/svg/notecard/pin-large-pinned-icon.svg';
import { StyledNotecard } from '../Notecard/styles';

export const NotecardButtonsContainer = styled.div`
  display: flex;
  height: 1.5rem;
  position: absolute;
  top: 0.187 5rem;
  right: 0.25rem;
  transition: opacity 100ms linear;
  opacity: 0;
  z-index: 100;

  ${StyledNotecard}:hover & {
    opacity : 1;
  }

  @media screen and (min-width: 900px) {
    opacity: 0;
    display: none;
  }
`;

const NotecardButton = styled(Button)`
  cursor: pointer;
  background-color: transparent;
  background-size: 18px 18px;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: content-box;
  border: 1px solid transparent;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: inline-block;
  height: 1.5rem;
  aspect-ratio: 1;
  z-index: 1000;
  margin: 0 -0.125rem;
  opacity: 0.9;
`;

export const PinButton = styled(NotecardButton)`
  background-image: url(${pinIcon});
`;

export const BigPinButton = styled(NotecardButton)`
  background-image: url(${largePinIcon});
  background-size: contain;
  display: none;
  position: absolute;
  right: 0.75rem;
  top: 0.325rem;
  opacity: 0;
  transition: opacity 200ms;
  @media screen and (min-width: 900px) {
    display: flex;
    &:hover {
      opacity: 0.8;
    }
  }
  ${({ isPinned }) => isPinned
    && css`
      opacity: 0.9;
      background-image: url(${largePinPinnedIcon});
    `}
`;

export const MenuButton = styled(NotecardButton)`
  background-size: 24px 24px;
  background-image: url(${menuCirclesIcon});
`;

export const ColorDropButton = styled(NotecardButton)`
  background-image: url(${colorDropIcon});
`;
