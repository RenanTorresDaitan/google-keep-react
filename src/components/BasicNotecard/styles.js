import styled, { css } from 'styled-components';
import Button from '../Button';
import pinIcon from '../../assets/svg/notecard/pin-icon.svg';
import menuCirclesIcon from '../../assets/svg/notecard/menu-circles-icon.svg';
import colorDropIcon from '../../assets/svg/notecard/drop-icon.svg';
import largePinIcon from '../../assets/svg/notecard/pin-large-icon.svg';
import largePinPinnedIcon from '../../assets/svg/notecard/pin-large-pinned-icon.svg';

export const NotecardButtonsContainer = styled.div`
  display: flex;
  height: 1.5rem;
  position: absolute;
  top: 0.187 5rem;
  right: 0.25rem;
  transition: opacity 100ms linear;
  opacity: 0.8;
  z-index: 100;

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

/*

.notecard {
  display: block;
  border-radius: 0.5rem;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  width: 267px;
  height: 100%;
  margin-top: 0.625rem;
  padding-bottom: 1rem;
  position: relative;
  transition: box-shadow outline 100ms;
}
.notecard:hover {
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
}

.notecard__menu-panel {
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
}
.notecard__menu-panel-option {
  color: var(--tc-dark-gray);
  font-family: var(--ff-roboto);
  font-size: 13px;
  position: relative;
  padding: 0.375rem 1.5rem 0.375rem 1.5rem;
}
.notecard__menu-panel-option:hover {
  background-color: var(--c-light-gray);
}
.notecard:hover .notecard__buttons-container {
  opacity: 1;
}
.notecard__button:hover {
  background-color: var(--c-light-gray);
  opacity: 0.8;
}
.note-lower-toolbar {
  display: none;
  opacity: 0;
  transition: opacity 200ms;
}

.notecard__title,
.notecard__desc {
  display: flex;
  flex: 0 1 100%;
  padding-inline: 1rem;
  padding-top: 1rem;
  background-color: transparent;
  outline: 0px;
  border: none;
  resize: none;
  width: 100%;
  overflow: hidden;
  overflow-wrap: break-word;
  white-space: pre-wrap;
}
.notecard__title,
.notecard__title-textarea {
  font-family: var(--ff-google);
  font-size: 0.875rem;
  font-weight: 500;
  text-overflow: ellipsis;
  letter-spacing: 0.3px;
  color: var(--tc-dark-gray);
}
.notecard__desc,
.notecard__desc-textarea {
  font-family: var(--ff-roboto);
  font-weight: 400;
  font-size: 0.75rem;
  color: var(--tc-gray-2);
}
.notecard__title {
  padding: 1rem 3.5rem 0 1rem;
}
.notecard__desc {
  font-size: 0.75rem;
  letter-spacing: 0.3px;
  padding: 0.625rem 1rem 0 1rem;
}
.notecard__title-textarea,
.notecard__desc-textarea {
  display: flex;
  background-color: transparent;
  box-sizing: content-box;
  overflow: hidden;
  outline: none;
  height: 1.0625rem;
  width: auto;
  resize: none;
  border: none;
  color: var(--c-black);
}

.notecard__done-button {
  border-radius: 0.5rem;
  border: none;
  display: flex;
  right: 0.25rem;
  bottom: 0.25rem;
  justify-content: flex-end;
  background-color: transparent;
  font-weight: bold;
  outline: 0;
  position: absolute;
  padding: 0.25rem 0.5rem;
}
.notecard__done-button:hover,
.notecard__done-button:focus {
  background-color: var(--tc-gray-1);
}

@media screen and (min-width: 900px) {
  .notecard {
    padding-bottom: 1rem;
  }
  .note-lower-toolbar {
    display: flex;
  }
  .notecard:hover .note-lower-toolbar{
    opacity: 1;
  }

  .notecard__pin-button--big {
    display: flex;
  }
  .notecard:hover .notecard__pin-button--big {
    opacity: 0.6;
  }
}
*/
