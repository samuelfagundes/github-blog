import {
  faArrowUpRightFromSquare,
  faComment,
  faChevronLeft,
  faCalendarDay,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IssuesContext } from '../../../../contexts/IssuesContext'
import { PostInfoContainer, PostInfoContent, PostInfoHeader } from './styles'

interface HeaderProps {
  title: string | undefined
  htmlUrl: string | undefined
  createdAt: string | undefined
  comments: number | undefined
}

export function PostInfo({ title, htmlUrl, createdAt, comments }: HeaderProps) {
  const { profile } = useContext(IssuesContext)

  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <Link to="..">
          <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
        </Link>
        <a href={htmlUrl}>
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </PostInfoHeader>
      <PostInfoContent>
        <h1>{title}</h1>
      </PostInfoContent>
      <footer>
        <i className="fa-brands fa-github" /> {profile?.login}
        {profile?.company !== null ? (
          <FontAwesomeIcon icon={faCalendarDay} />
        ) : (
          ''
        )}
        {createdAt
          ? formatDistanceToNow(new Date(createdAt), {
              addSuffix: true,
              locale: ptBR,
            })
          : undefined}
        <FontAwesomeIcon icon={faComment} /> {comments}{' '}
        {(comments && comments > 1) || comments === 0 ? 'comments' : 'comment'}
      </footer>
    </PostInfoContainer>
  )
}
