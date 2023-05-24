import { ProfileContainer, ProfileContent, ProfileInfo } from './styles';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

import { useState, useEffect } from 'react';
import { api } from '../../../../lib/axios';

const username = import.meta.env.VITE_USERNAME;

interface ProfileData {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  followers: number;
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>(
    {} as ProfileData
  );

  useEffect(() => {
    api.get(`/users/${username}`).then(({ data }) => {
      setProfileData(data);
    });
  }, []);

  return (
    <ProfileContainer>
      <img src={profileData.avatar_url} alt="" />

      <ProfileContent>
        <h3>
          {profileData.name}
          <a href={profileData.html_url}>
            GITHUB <HiArrowTopRightOnSquare />
          </a>
        </h3>
        <p>{profileData.bio}</p>
        <ProfileInfo>
          <span>
            <BsGithub size={18} />
            <p>{profileData.login}</p>
          </span>
          <span>
            <AiOutlineUsergroupDelete size={18} />
            <p>{profileData.followers} seguidores</p>
          </span>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  );
}
