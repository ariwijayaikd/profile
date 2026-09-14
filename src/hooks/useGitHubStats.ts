import { useEffect, useState } from 'react'

const GITHUB_USERNAME = 'ariwijayaikd'

interface ContributionsResponse {
  total: { lastYear: number }
  contributions: ContributionDay[]
}

export interface ContributionDay {
  date: string
  count: number
  level: number
}

export interface GitHubStats {
  contributions: number | null
  contributionDays: ContributionDay[]
}

export function useGitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
          { signal: controller.signal },
        )

        if (!res.ok) {
          throw new Error(`Contributions API responded with ${res.status}`)
        }

        const data = (await res.json()) as ContributionsResponse

        if (controller.signal.aborted) return

        setStats({
          contributions: data.total.lastYear,
          contributionDays: data.contributions,
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
