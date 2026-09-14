import { useGitHubStats, type ContributionDay } from '../hooks/useGitHubStats'
import { skills } from '../data/skills'

const statItems = [
  { key: 'contributions', icon: 'fas fa-fire', label: 'Contributions' },
] as const

function buildWeeks(days: ContributionDay[]): (ContributionDay | null)[][] {
  if (days.length === 0) return []

  const firstWeekday = new Date(`${days[0].date}T00:00:00`).getDay()
  const cells: (ContributionDay | null)[] = [
    ...Array<null>(firstWeekday).fill(null),
    ...days,
  ]

  const weeks: (ContributionDay | null)[][] = []
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7))
  }
  return weeks
}

export default function GitHubStats() {
  const { stats, loading, error } = useGitHubStats()

  if (error) {
    console.warn(`GitHub stats unavailable: ${error}`)
    return null
  }

  const weeks = stats ? buildWeeks(stats.contributionDays) : []

  return (
    <div className="github-stats" aria-label="GitHub statistics">
      <div className="github-stats__grid">
        {statItems.map((item) => (
          <div key={item.key} className="github-stat">
            <i className={`${item.icon} github-stat__icon`} aria-hidden="true" />
            <span className="github-stat__value">
              {loading || !stats ? '—' : (stats[item.key] ?? '—')}
            </span>
            <span className="github-stat__label">{item.label}</span>
          </div>
        ))}
      </div>

      {skills.length > 0 && (
        <div className="github-stats__skills">
          {skills.map((skill) => (
            <span key={skill} className="tech-badge">
              {skill}
            </span>
          ))}
        </div>
      )}

      {weeks.length > 0 && (
        <div className="github-stats__heatmap">
          <div
            className="github-heatmap"
            role="img"
            aria-label={`${stats?.contributions ?? 0} contributions in the last year`}
          >
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="github-heatmap__week">
                {week.map((day, dayIndex) =>
                  day ? (
                    <span
                      key={day.date}
                      className={`github-heatmap__day github-heatmap__day--level-${day.level}`}
                      title={`${day.count} contribution${
                        day.count === 1 ? '' : 's'
                      } on ${day.date}`}
                    />
                  ) : (
                    <span
                      key={`pad-${weekIndex}-${dayIndex}`}
                      className="github-heatmap__day github-heatmap__day--empty"
                    />
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
