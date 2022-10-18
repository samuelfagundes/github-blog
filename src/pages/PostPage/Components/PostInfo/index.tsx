import {
  faArrowUpRightFromSquare,
  faBuilding,
  faChevronLeft,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { IssuesContext } from '../../../../contexts/IssuesContext'
import { PostInfoContainer, PostInfoContent, PostInfoHeader } from './styles'

export function PostInfo() {
  const { profile } = useContext(IssuesContext)

  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <a>
          <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
        </a>
        <a>
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </PostInfoHeader>
      <PostInfoContent>
        <h1>JavaScript data types and data structures</h1>
      </PostInfoContent>
      <footer>
        <i className="fa-brands fa-github" /> {profile?.login}
        {profile?.company !== null ? <FontAwesomeIcon icon={faBuilding} /> : ''}
        {profile?.company}
        <FontAwesomeIcon icon={faUserGroup} /> {profile?.followers}{' '}
        {profile?.followers && profile.followers > 1 ? 'followers' : 'follower'}
      </footer>
    </PostInfoContainer>
  )
}
