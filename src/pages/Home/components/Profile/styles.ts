import styled from 'styled-components';

export const ProfileContainer = styled.section`
  display: flex;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  gap: 2rem;
  margin-top: -5.5rem;

  > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileContent = styled.div`
  > h3 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    display: flex;
    justify-content: space-between;

    a {
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 160%;
      text-transform: uppercase;
      color: ${(props) => props.theme['brand-blue']};
      display: flex;
      align-items: center;
      gap: 8px;
      line-height: 1;
    }
  }

  > p {
    font-size: 1rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
    margin: 8px 0 24px 0;
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
