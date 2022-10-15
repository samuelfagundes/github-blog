import { ProfileContainer, ProfileInfo } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface ProfileProps {
  html_url: string
  avatar_url: string
  login: string
  bio: string
  name: string
  company: string
  followers: number
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>()

  useEffect(() => {
    async function getProfile() {
      const response = await axios.get(
        `http://api.github.com/users/samuelfagundes`,
      )
      setProfile(response.data)
    }

    getProfile()
  }, [])

  console.log(profile)

  return (
    <ProfileContainer>
      <div>
        <img src={profile?.avatar_url} alt="" />
      </div>
      <ProfileInfo>
        <h1>
          {profile?.name}
          <a href={profile?.html_url}>
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </h1>
        <span>{profile?.bio}</span>
        <footer>
          <i className="fa-brands fa-github" /> {profile?.login}
          {profile?.company !== null ? (
            <FontAwesomeIcon icon={faBuilding} />
          ) : (
            ''
          )}
          {profile?.company}
          <FontAwesomeIcon icon={faUserGroup} /> {profile?.followers}{' '}
          {profile!.followers > 1 ? 'followers' : 'follower'}
        </footer>
      </ProfileInfo>
    </ProfileContainer>
  )
}
