import { PostContainer } from './styles';
import { PostsProps } from '../../index';
import { relativeDateFormatter } from '../../../../utils/formatter';

interface Post {
  post: PostsProps;
}
export function Post({ post }: Post) {
  const formattedDate = relativeDateFormatter(post.created_at);
  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <h3>{post.title}</h3>
        <span>{formattedDate}</span>
      </div>
      <p>{post.body}</p>
    </PostContainer>
  );
}
