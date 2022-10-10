import {
  faArrowUpRightFromSquare,
  faBuilding,
  faChevronLeft,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PostInfoContainer, PostInfoContent, PostInfoHeader } from './styles'

export function PostInfo() {
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
        <i className="fa-brands fa-github" /> samuelfagundes
        <FontAwesomeIcon icon={faBuilding} /> Rocketseat
        <FontAwesomeIcon icon={faUserGroup} /> 32 seguidores
      </footer>
    </PostInfoContainer>
  )
}
