import styled from 'styled-components';
import Button from '../Button';
import searchIcon from '../../assets/svg/search-icon.svg';
import closeIcon from '../../assets/svg/inverted-close-icon.svg';

export const SearchPanel = styled.div`
  --height: 3rem;
  --margin: 2rem;
  position: absolute;
  align-items: center;
  display: flex;
  background-color: var(--c-white);
  flex-direction: row;
  height: var(--height);
  width: 100%;
  z-index: 800;

  @media screen and (min-width: 900px) {
    max-width: min(560px, 960px);
    margin: 0rem 20rem 0rem 12rem;
    display: flex;
    background-color: var(--c-light-gray);
    border-radius: 0.5rem;
  }
`;

export const SearchButton = styled(Button)`
  display: block;
  cursor: pointer;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1.375rem;
  opacity: 0.5;
  border-radius: 50%;
  height: var(--height);
  aspect-ratio: 1;
  `;

export const CancelSearchButton = styled(SearchButton)`
  background-image: url(${closeIcon});
  margin: calc(var(--margin) / 2);
  &:hover{
    background-color: var(--c-light-gray);
  }
  @media screen and (min-width: 900px) {
    margin: 0;
  }
`;

export const SearchInput = styled.input`
  border-radius: 1rem;
  border: none;
  background-color: var(--c-white);
  color: var(--tc-gray-2);
  flex-grow: 1;
  flex-shrink: 1;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  outline: none;
  width: auto;
  height: calc(var(--height) / 1.5);

  @media screen and (min-width: 900px) {
    margin-right: 5rem;
    background-color: transparent;
    max-width: min(100%, 720px);
  }
`;
