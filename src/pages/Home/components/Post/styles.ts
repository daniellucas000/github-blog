import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostContainer = styled(Link)`
  max-width: 26rem;
  width: 100%;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  height: 260px;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-wrap: wrap;

    h3 {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-size: 0.875rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    font-size: 1rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
    overflow: hidden;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;
