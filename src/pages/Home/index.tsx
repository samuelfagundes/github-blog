import { useContext } from 'react'
import { IssuesContext } from '../../contexts/IssuesContext'
import { Post } from './Components/Post'
import { Profile } from './Components/Profile'
import { SearchForm } from './Components/SearchForm'
import { HomeContainer, PublicationsContainer } from './styles'

export function Home() {
  const { issues } = useContext(IssuesContext)

  return (
    <HomeContainer>
      <Profile />

      <div className="publicationsHeader">
        <h2>Publicações</h2>
        <span>{issues.length} publicações</span>
      </div>
      <SearchForm />
      <PublicationsContainer>
        {issues.map((issue) => {
          return (
            <Post
              title={issue.title}
              body={issue.body}
              createdAt={issue.created_at}
              number={issue.number}
              key={issue.id}
            />
          )
        })}
      </PublicationsContainer>
    </HomeContainer>
  )
}
