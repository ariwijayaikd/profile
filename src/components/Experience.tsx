import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="experience__timeline">
          {experiences.map((item) => (
            <article key={item.id} className="experience__item">
              <div className="experience__header">
                <div>
                  <h3 className="experience__role">{item.role}</h3>
                  <p className="experience__company">{item.company}</p>
                </div>
                <time className="experience__period">{item.period}</time>
              </div>

              {item.location && (
                <p className="experience__location">{item.location}</p>
              )}

              <ul className="experience__highlights">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
