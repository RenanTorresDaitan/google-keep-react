import styled from 'styled-components';
import searchIcon from '../../assets/svg/search-icon.svg';
import openNewTabIcon from '../../assets/svg/open-new-tab-icon.svg';
import closeIcon from '../../assets/svg/close-icon.svg';

export const AppHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--c-light-gray);
  background-color: var(--c-white);
  position: fixed;
  width: 100%;
  padding: 0.5rem;
  z-index: 500;
`;

export const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  cursor: pointer;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.25rem;
  width: 1.25rem;
  margin: 3px;
  padding: 1.25rem;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    background-color: var(--c-light-gray);
  }
`;

export const SearchButton = styled(StyledButton)`
  background-image: url(${searchIcon});
`;

export const OpenNewTabButton = styled(StyledButton)`
  background-image: url(${openNewTabIcon});
`;

export const CloseButton = styled(StyledButton)`
  background-image: url(${closeIcon});
`;
