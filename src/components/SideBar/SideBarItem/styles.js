import styled, { css } from 'styled-components';

export const StyledSideBarItem = styled.div`
  cursor: pointer;
  &:hover {
    margin-left: 0rem;
    width: 100%;
  }
  ${({ expand }) => expand
    && css`
      margin-left: 0rem;
      width: 100%;
    `}
`;

export const SideBarButton = styled.div`
  pointer-events: none;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 3rem;
  padding: 0.75rem;
  width: 3rem;
  border-radius: 100vw 100vw 100vw 100vw;
  background-color: var(--c-white);
  transition: width 150ms 350ms;
  transition: border-radius 150ms 350ms;
  transition: padding-left, 150ms 350ms;

  ${StyledSideBarItem}:hover > & {
    border-radius: 0vw 100vw 100vw 0vw;
    background-color: var(--c-light-gray);
    padding-left: 1.5rem;
    width: 100%;
  }
  ${({ active }) => active
    && css`
      background-color: #feefc3;
      ${StyledSideBarItem}:hover > & {
        background-color: #feefc3;
      }
    `};
  ${({ expand }) => expand
    && css`
      border-radius: 0vw 100vw 100vw 0vw;
      padding-left: 1.5rem;
      width: 100%;

      ${StyledSideBarItem}:hover > & {
        transition: background-color 0ms;
        transition-delay: 0ms;
        background-color: var(--c-light-gray);
      }
    `};
`;

export const SidebarIcon = styled.img`
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
  ${({ src }) => css`
    background-image: url(${src});
  `}
`;

export const SideBarLabel = styled.span`
  pointer-events: none;
  background-color: transparent;
  padding-left: 1rem;
  white-space: nowrap;
`;
