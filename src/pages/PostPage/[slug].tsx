import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import ReactMarkdown from 'react-markdown'
import { PostInfo } from './Components/PostInfo'
import { PostPageContainer, PostPageContent } from './styles'

interface PostProps {
  title: string
  body: string
  html_url: string
  created_at: string
  comments: number
}

export function PostPage() {
  const { number } = useParams()
  const [post, setPost] = useState<PostProps>()

  useEffect(() => {
    async function getPost() {
      const response = await api.get(`/repos/colinhacks/zod/issues/${number}`)

      setPost(response.data)
    }

    getPost()
  }, [number])

  console.log(post)

  return (
    <PostPageContainer>
      <PostInfo
        title={post?.title}
        htmlUrl={post?.html_url}
        createdAt={post?.created_at}
        comments={post?.comments}
      />

      <PostPageContent>
        <p>
          <ReactMarkdown>{post?.body}</ReactMarkdown>
        </p>
      </PostPageContent>
    </PostPageContainer>
  )
}
