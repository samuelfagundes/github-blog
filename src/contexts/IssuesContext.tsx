import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Issues {
  title: string
  body: string
  number: number
  id: number
  created_at: string
}

interface ProfileProps {
  html_url: string
  avatar_url: string
  login: string
  bio: string
  name: string
  company: string
  followers: number
}

interface IssuesContextType {
  issues: Issues[]
  profile?: ProfileProps
  fetchIssues: (query: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issues[]>([])
  const [profile, setProfile] = useState<ProfileProps>()

  useEffect(() => {
    async function getProfile() {
      const response = await api.get(`/users/colinhacks`)
      setProfile(response.data)
    }

    getProfile()
  }, [])

  useEffect(() => {
    async function getIssues() {
      const response = await api.get('/repos/colinhacks/zod/issues')

      setIssues(response.data)
    }

    getIssues()
  }, [])

  async function fetchIssues(query: string) {
    const response = await api.get(
      `/search/issues?q=${encodeURIComponent(query)}repo:colinhahacks/zod`,
      {
        params: {
          q: query,
        },
      },
    )

    setIssues(response.data.items)
    console.log(issues)
  }

  return (
    <IssuesContext.Provider
      value={{
        fetchIssues,
        issues,
        profile,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
