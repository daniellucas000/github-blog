import { BsChevronLeft, BsGithub } from 'react-icons/bs';
import { PostsProps } from '../../Home';

import { PostHeaderContent, ProfileInfo } from './styles';
import { relativeDateFormatter } from '../../../utils/formatter';

import { Link } from 'react-router-dom';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

interface PostHeaderProps {
  postData: PostsProps;
}

export function PostHeader({ postData }: PostHeaderProps) {
  const formattedDate = relativeDateFormatter(postData.created_at);

  return (
    <PostHeaderContent>
      <div>
        <Link to={'/'}>
          <BsChevronLeft />
          Voltar
        </Link>

        <a href={postData.html_url}>
          Ver no github <HiArrowTopRightOnSquare />
        </a>
      </div>

      <h3>{postData.title}</h3>
      <ProfileInfo>
        <span>
          <BsGithub size={18} />
          {/* <p>{postData.user.login}</p> */}
        </span>
        <span>
          <AiOutlineUsergroupDelete size={18} />
          <p>{formattedDate}</p>
        </span>
      </ProfileInfo>
    </PostHeaderContent>
  );
}
