import styled, { css } from 'styled-components';
import Button from '../Button';
import noNotesFolderImg from '../../assets/no-notes-folder.png';
import bellIcon from '../../assets/svg/bell-icon.svg';
import archiveIcon from '../../assets/svg/notecard/archive-note-icon.svg';
import trashIcon from '../../assets/svg/trash-icon.svg';

export const TrashHeader = styled.div`
  display: flex;
  color: --tc-dark-gray;
  cursor: default;
  flex: 1 0 100%;
  font-size: 17px;
  font-style: italic;
  align-items: center;
  justify-content: center;
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
  margin-inline: auto;
`;

export const EmptyTrashButton = styled(Button)`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.87);
  overflow: hidden;
  font-family: 'Google Sans', Roboto, Arial, sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  color: #1a73e8;
  font-weight: 500;
  height: 36px;
  padding: 0.5rem 1.5rem;
  margin-left: 1rem;
  border-radius: 0.25rem;
  &:hover {
    background-color: rgba(66, 133, 244, 0.039);
  }
`;

export const StyledNotesAreaHeader = styled.div`
  font-family: var(--ff-google), sans-serif;
  color: var(--tc-dark-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  & > h4 {
    margin-top: 0.5rem;
    font-size: 0.8rem;
    font-weight: 200;
  }
`;

export const NotesAreaImage = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  height: 120px;
  aspect-ratio: 1;
  opacity: 0.1;
  margin: 1.25rem;

  ${({ sidebarSelected }) => {
    let imgCss = '';
    switch (sidebarSelected) {
      case 'NOTES':
        imgCss = css`
          background-image: url(${noNotesFolderImg});
          width: 236px;
          height: 180px;
          opacity: 1;
        `;
        break;
      case 'REMINDERS':
        imgCss = css`
          background-image: url(${bellIcon});
        `;
        break;
      case 'ARCHIVE':
        imgCss = css`
          background-image: url(${archiveIcon});
        `;
        break;
      case 'TRASH':
        imgCss = css`
          background-image: url(${trashIcon});
        `;
        break;
      default:
        break;
    }
    return imgCss;
  }}
`;

export const NotesAreaTitle = styled.h2`
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 400;

  ${({ sidebarSelected }) => {
    let titleCss = '';
    switch (sidebarSelected) {
      case 'NOTES':
        break;
      case 'REMINDERS':
      case 'ARCHIVE':
      case 'TRASH':
        titleCss = css`
          color: #80868b;
          font-size: 1.375rem;
          line-height: 1.75rem;
        `;
        break;
      default:
        break;
    }
    return titleCss;
  }}
`;
