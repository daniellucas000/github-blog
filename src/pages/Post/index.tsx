import { useState, useEffect, useCallback } from 'react';
import { api } from '../../lib/axios';
import { useParams } from 'react-router-dom';
import { PostHeader } from './PostHeader';
import { PostContent } from './PostContent';

import { PostsProps } from '../Home';

import { PostContainer } from './styles';

const username = import.meta.env.VITE_USERNAME;
const repoName = import.meta.env.VITE_REPONAME;

export function Post() {
  const [postData, setPostData] = useState<PostsProps>({} as PostsProps);
  const { id } = useParams();

  const getPost = useCallback(async () => {
    const response = await api.get(
      `/repos/${username}/${repoName}/issues/${id}`
    );

    setPostData(response.data);
  }, [postData]);

  useEffect(() => {
    getPost();
  }, []);

  return (
    <PostContainer>
      <PostHeader postData={postData} />
      <PostContent content={postData.body} />
    </PostContainer>
  );
}
