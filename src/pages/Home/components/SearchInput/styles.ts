import styled from 'styled-components';

export const SearchInputContainer = styled.form`
  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;

    h3 {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-span']};
    }
  }

  > input {
    width: 100%;
    padding: 12px 16px;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    color: ${(props) => props.theme['base-text']};
  }
`;
