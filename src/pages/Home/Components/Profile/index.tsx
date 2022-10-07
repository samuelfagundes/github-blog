import { ProfileContainer, ProfileInfo } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/79729785?v=4"
          alt=""
        />
      </div>
      <ProfileInfo>
        <h1>
          Samuel Fagundes
          <p>
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </p>
        </h1>
        <span>Life is shit and I keep struggling</span>
        <footer>
          <i className="fa-brands fa-github" /> samuelfagundes
          <FontAwesomeIcon icon={faBuilding} /> Rocketseat
          <FontAwesomeIcon icon={faUserGroup} /> 32 seguidores
        </footer>
      </ProfileInfo>
    </ProfileContainer>
  )
}
