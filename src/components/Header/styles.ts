import styled from 'styled-components';
import bgHeader from '../../assets/bgHeader.svg';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 18.5rem;
  background: url(${bgHeader}) no-repeat center;
  background-size: cover;

  img {
    margin-bottom: 5rem;
  }
`;
