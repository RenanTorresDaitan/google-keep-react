import styled from 'styled-components';

export const StyledColorBallContainer = styled.div`
  background-color: var(--c-off-white-1);
  border: 1px solid var(--c-gray);
  border-radius: 1rem;
  padding: 0.3rem;
  position: absolute;
  display: flex;
  position: absolute;
  right: 1.5rem;
  gap: 0.1rem;
  z-index: 2020;
`;

export const ColorBall = styled.button`
  display: flex;
  border: 1px solid var(--c-gray);
  flex-direction: row;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
`;
