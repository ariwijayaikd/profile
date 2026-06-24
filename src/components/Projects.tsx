import { useState } from 'react'
import { projects } from '../data/projects'

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-carousel">
          <div className="projects-track">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id
            const hasExpandableDetails =
              project.highlights || project.impact

            const showCardActions =
              hasExpandableDetails || project.liveUrl || project.repoUrl

            return (
              <article
                key={project.id}
                className="project-card"
              >
                <div className="project-image">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} thumbnail`}
                      className={`project-image__img${
                        project.imageFit === 'contain'
                          ? ' project-image__img--contain'
                          : ''
                      }`}
                    />
                  ) : (
                    <i className={project.icon} aria-hidden="true" />
                  )}
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {project.role && (
                    <p className="project-role">
                      <span className="project-label">My Role:</span> {project.role}
                    </p>
                  )}

                  {showCardActions && (
                    <div className="project-actions">
                      {hasExpandableDetails && (
                        <button
                          type="button"
                          className="project-details-toggle"
                          onClick={() =>
                            setExpandedId(isExpanded ? null : project.id)
                          }
                          aria-expanded={isExpanded}
                          aria-controls={`project-details-${project.id}`}
                        >
                          {isExpanded ? 'Hide Details' : 'View Details'}
                          <i
                            className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}
                            aria-hidden="true"
                          />
                        </button>
                      )}

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Site <i className="fas fa-arrow-right" />
                        </a>
                      ) : (
                        project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Repository{' '}
                            <i className="fas fa-arrow-right" />
                          </a>
                        )
                      )}
                    </div>
                  )}

                  {isExpanded && hasExpandableDetails && (
                        <div
                          id={`project-details-${project.id}`}
                          className="project-details"
                        >
                          {project.highlights && (
                            <div className="project-section">
                              <h4 className="project-section__title">
                                What I Did
                              </h4>
                              <ul className="project-highlights">
                                {project.highlights.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {project.impact && (
                            <div className="project-section">
                              <h4 className="project-section__title">Impact</h4>
                              <p className="project-impact">{project.impact}</p>
                            </div>
                          )}
                        </div>
                      )}
                </div>
              </article>
            )
          })}
          </div>
        </div>
      </div>
    </section>
  )
}
