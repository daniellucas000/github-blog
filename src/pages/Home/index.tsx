import { Profile } from './components/Profile';
import { SearchInput } from './components/SearchInput';
import { Post } from './components/Post';
import { useEffect, useState, useCallback } from 'react';

import { api } from '../../lib/axios';

import { HomeContainer, PostListContainer } from './styles';

const username = import.meta.env.VITE_USERNAME;
const repoName = import.meta.env.VITE_REPONAME;

export interface PostsProps {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  user: {
    login: string;
  };
}

export function Home() {
  const [posts, setPosts] = useState<PostsProps[]>([]);

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`
        );
        setPosts(response.data.items);
      } finally {
      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts.length);

  return (
    <HomeContainer>
      <Profile />
      <SearchInput postLength={posts.length} getPosts={getPosts} />

      <PostListContainer>
        {posts.map((post) => (
          <Post key={post.number} post={post} />
        ))}
      </PostListContainer>
    </HomeContainer>
  );
}
