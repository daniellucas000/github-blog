import styled from 'styled-components';

export const PostHeaderContent = styled.div`
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -5.5rem;
  padding: 2rem;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 8px;

      font-weight: 700;
      font-size: 0.75rem;
      line-height: 1;
      text-transform: uppercase;
      color: ${(props) => props.theme['brand-blue']};
    }
  }

  h3 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    margin: 20px 0 8px 0;

    color: ${props => props.theme['base-title']};
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      color: ${(props) => props.theme['base-label']};
    }

    p {
      font-size: 1rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`;
