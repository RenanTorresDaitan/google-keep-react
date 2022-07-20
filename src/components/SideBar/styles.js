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
