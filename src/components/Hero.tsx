import { socialLinks } from '../data/socialLinks'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__content">
        <div className="hero__layout">
          <div className="hero__text">
            <h1 className="hero__title">Hi, I'm Ari Wijaya</h1>
            <p className="hero__subtitle">
              Junior DevOps Engineer specializing in CI/CD, Automation, and
              Deployment Workflows
            </p>
            <div className="hero__about">
              <p>
                I work on improving application delivery by building automated
                deployment pipelines, managing server environments, and
                supporting reliable release processes. I'm interested in
                creating DevOps workflows that are efficient, maintainable, and
                easy for teams to use.
              </p>
              <p>
                Currently focused on cloud infrastructure, CI/CD optimization,
                and modern DevOps practices.
              </p>
            </div>
          </div>

          <div className="hero__media">
            <img
              src="/profile.webp"
              alt="Ari Wijaya"
              className="hero__photo"
              width={320}
              height={320}
            />
            <div className="hero__social">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
