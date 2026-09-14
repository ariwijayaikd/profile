import { useGitHubStats } from '../hooks/useGitHubStats'

const statItems = [
  { key: 'repos', icon: 'fas fa-book', label: 'Repositories' },
  { key: 'stars', icon: 'fas fa-star', label: 'Stars' },
  { key: 'followers', icon: 'fas fa-users', label: 'Followers' },
  { key: 'following', icon: 'fas fa-user-plus', label: 'Following' },
] as const

export default function GitHubStats() {
  const { stats, loading, error } = useGitHubStats()

  if (error) {
    console.warn(`GitHub stats unavailable: ${error}`)
    return null
  }

  return (
    <div className="github-stats" aria-label="GitHub statistics">
      <div className="github-stats__grid">
        {statItems.map((item) => (
          <div key={item.key} className="github-stat">
            <i className={`${item.icon} github-stat__icon`} aria-hidden="true" />
            <span className="github-stat__value">
              {loading || !stats ? '—' : stats[item.key]}
            </span>
            <span className="github-stat__label">{item.label}</span>
          </div>
        ))}
      </div>

      {stats && stats.topLanguages.length > 0 && (
        <div className="github-stats__langs">
          {stats.topLanguages.map((language) => (
            <span key={language} className="tech-badge">
              {language}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
