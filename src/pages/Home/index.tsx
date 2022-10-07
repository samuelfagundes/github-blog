import { Profile } from './Components/Profile'
import { SearchBar } from './Components/SearchBar'
import { HomeContainer, PublicationsContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />

      <div className="publicationsHeader">
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>
      <SearchBar />
      <PublicationsContainer></PublicationsContainer>
    </HomeContainer>
  )
}
