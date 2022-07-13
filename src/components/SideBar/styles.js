import styled, { css } from 'styled-components';

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

  &:hover {
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
/*

.sidebar-item {
}
.sidebar__container:hover,
.sidebar__container:focus-within,
.sidebar__container--expanded {
  width: 17.5rem;
}
.sidebar__container:hover .sidebar-item:hover > .sidebar-item__icon,
.sidebar-item__icon--expanded:hover {
  background-color: var(--c-light-gray);
}

.sidebar-item__icon {
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
}
.sidebar__container:hover .sidebar-item__icon,
.sidebar-item__icon--expanded {
  border-radius: 0vw 100vw 100vw 0vw;
  padding-left: 1.5rem;
  width: 100%;
}
.sidebar-item__label {
  pointer-events: none;
  background-color: transparent;
  padding-left: 1rem;
  white-space: nowrap;
}
.sidebar-item[active='true'] > .sidebar-item__icon,
.sidebar__container:hover .sidebar-item[active='true'] > .sidebar-item__icon {
  background-color: #feefc3;
}
.sidebar-item[active='true'] .sidebar-item__icon > .svg-icon-large {
  opacity: 1;
}

*/
