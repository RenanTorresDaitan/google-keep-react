import styled from 'styled-components';
import menuBarsIcon from '../../assets/svg/menu-bars.svg';
import Button from '../Button';
import keepIcon from '../../assets/keep-icon.png';

export const HeaderContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: left;
  align-items: center;
  padding-left: 0rem;
`;

export const MenuButton = styled(Button)`
  display: none;
  cursor: pointer;
  background-image: url(${menuBarsIcon});
  background-repeat: no-repeat;
  background-position: center;
  height: 1.5rem;
  width: 1.5rem;
  opacity: 0.6;
  color: #000;
  padding: 1rem 1.75rem;

  @media screen and (min-width: 900px) {
    display: flex;
  }
`;

export const HeaderTitle = styled.h2`
  color: var(--tc-gray-2);
  display: block;
  font-family: var(--ff-roboto);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1.5px;
  line-height: 13px;
  text-transform: uppercase;

  @media screen and (min-width: 900px) {
    font-size: 1.3rem;
    font-family: 'Product Sans';
    letter-spacing: 0px;
    font-weight: 400;
    text-transform: capitalize;
    padding-left: 0.5rem;
  }
`;

export const HeaderSubtitle = styled.h3`
  color: var(--tc-gray-2);
  display: block;
  font-family: var(--ff-google);
  font-size: 16px;
  font-weight: bold;
  margin-left: -1px;
  line-height: 20px;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  padding-left: 0rem;

  @media screen and (min-width: 900px) {
    min-width: 230px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 0 0 auto;
    padding-right: 1rem;
    margin-inline: 0.5rem;
  }
`;

export const HeaderIcon = styled.div`
  display: none;
  height: 2.5rem;
  width: 2.5rem;
  background: url(${keepIcon}) no-repeat center;
  background-size: contain;

  @media screen and (min-width: 900px) {
    display: flex;
  }
`;
