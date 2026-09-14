import { useEffect, useState } from 'react'

const GITHUB_USERNAME = 'ariwijayaikd'

interface GitHubUser {
  public_repos: number
  followers: number
  following: number
}

interface GitHubRepo {
  stargazers_count: number
  language: string | null
}

export interface GitHubStats {
  repos: number
  stars: number
  followers: number
  following: number
  topLanguages: string[]
}

export function useGitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
            signal: controller.signal,
          }),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
            { signal: controller.signal },
          ),
        ])

        if (!userRes.ok || !reposRes.ok) {
          throw new Error(
            `GitHub API responded with ${userRes.status}/${reposRes.status}`,
          )
        }

        const user = (await userRes.json()) as GitHubUser
        const repos = (await reposRes.json()) as GitHubRepo[]

        const stars = repos.reduce(
          (total, repo) => total + repo.stargazers_count,
          0,
        )

        const languageCounts = new Map<string, number>()
        for (const repo of repos) {
          if (!repo.language) continue
          languageCounts.set(
            repo.language,
            (languageCounts.get(repo.language) ?? 0) + 1,
          )
        }

        const topLanguages = [...languageCounts.entries()]
          .sort((a, b) => b[1] - a[1])
          .slice(0, 3)
          .map(([language]) => language)

        setStats({
          repos: user.public_repos,
          stars,
          followers: user.followers,
          following: user.following,
          topLanguages,
        })
      } catch (err) {
        if (controller.signal.aborted) return
        setError(err instanceof Error ? err.message : 'Failed to load')
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    load()

    return () => controller.abort()
  }, [])

  return { stats, loading, error }
}
