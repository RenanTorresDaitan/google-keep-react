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
/*
export const SideBarContainer = styled.div`
  display: none;
  flex-direction: column;
  height: 100%;
  padding-top: 0.5rem;
  transition: width, 150ms 350ms;
  width: 4.25rem;

  ${({ expand }) => expand
    && css`
      width: 17.5rem;
    `};

  &:hover,
  &:focus-within {
    width: 17.5rem;
  }
  @media screen and (min-width: 900px) {
    display: flex;
    flex-shrink: 0;
  }
`;

export const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 3rem;
  margin-left: 0.75rem;
  transition: margin, width, 150ms 350ms;

  ${({ expand }) => expand
    && css`
      margin-left: 0rem;
      width: 100%;
    `};

  ${SideBarContainer}:hover > & {
    margin-left: 0rem;
    width: 100%;
  }
`;
*/

/*

.sidebar__container:hover .sidebar-item:hover > .sidebar-item__icon,
.sidebar-item__icon--expanded:hover {
  background-color: var(--c-light-gray);
}

.sidebar-item__icon {
}
.sidebar__container:hover .sidebar-item__icon,
.sidebar-item__icon--expanded {
}
.sidebar-item[active='true'] > .sidebar-item__icon,
.sidebar__container:hover .sidebar-item[active='true'] > .sidebar-item__icon {
  background-color: #feefc3;
}
.sidebar-item[active='true'] .sidebar-item__icon > .svg-icon-large {
  opacity: 1;
}

*/
