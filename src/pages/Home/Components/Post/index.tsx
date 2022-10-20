import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

import { PostContainer } from './styles'

interface PostProps {
  title: string
  body: string
  createdAt: string
  number: number
}

export function Post({ title, body, createdAt, number }: PostProps) {
  return (
    <PostContainer>
      <Link to={`/post/${number}`}>
        <div>
          <h1>{title}</h1>
          <span>
            {formatDistanceToNow(new Date(createdAt), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </div>
        <p>
          <ReactMarkdown>{body}</ReactMarkdown>
        </p>
      </Link>
    </PostContainer>
  )
}
