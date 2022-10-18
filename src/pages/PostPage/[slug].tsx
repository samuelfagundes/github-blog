import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { PostInfo } from './Components/PostInfo'
import { PostPageContainer, PostPageContent } from './styles'

interface PostProps {
  body: string
  html_url: string
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
      <PostInfo />

      <PostPageContent>
        <p>{post?.body}</p>
      </PostPageContent>
    </PostPageContainer>
  )
}
