import kemdiktisaintekThumb from '../assets/kemdiktisaintek.jpg'
import pddiktiAdminThumb from '../assets/pddikti-admin.jpg'
import pddiktiThumb from '../assets/pddikti.jpg'

export interface Project {
  id: string
  title: string
  description: string
  role?: string
  highlights?: string[]
  impact?: string
  tech: string[]
  icon: string
  image?: string
  imageFit?: 'cover' | 'contain'
  repoUrl?: string
  liveUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'kemdiktisaintek',
    title: 'Kemdiktisaintek',
    description: 'Portal Kementerian',
    role: 'DevOps',
    tech: [],
    icon: 'fas fa-landmark',
    image: kemdiktisaintekThumb,
    liveUrl: 'https://kemdiktisaintek.go.id',
  },
  {
    id: 'pddikti',
    title: 'PDDikti',
    description: 'Portal Data Pendidikan Tinggi',
    role: 'DevOps / Technical Lead / Project Manager',
    highlights: [
      'Translated application requirements into technical breakdowns, including high-level design, system architecture, application flow, and database structure.',
      'Designed and documented system architecture to support development, deployment, monitoring, and maintenance needs.',
      'Built and maintained deployment pipelines to support more consistent application delivery.',
      'Managed server environments for backend, frontend, database, and supporting services.',
      'Configured Docker-based deployment and supported CI/CD workflow implementation.',
      'Coordinated tasks, sprint planning, and cross-team communication to align development progress with project needs.',
      'Performed UAT support, monitoring, performance testing, and basic security testing using community tools.',
    ],
    impact:
      'Helped bridge business requirements and technical implementation by turning application needs into clear architecture, tasks, and deployment workflows. Improved deployment consistency, reduced manual release steps, supported better system maintainability, and helped the team deliver application changes in a more structured and reliable way.',
    tech: [
      'Docker',
      'GitHub Actions',
      'Linux',
      'Nginx',
      'MSSQL',
      'Elasticsearch',
      'PostgreSQL',
      'OWASP ZAP',
      'JMeter',
      'System Architecture',
      'High-Level Design',
      'Project Management',
    ],
    icon: 'fas fa-graduation-cap',
    image: pddiktiThumb,
    liveUrl: 'https://pddikti.kemdiktisaintek.go.id/',
    featured: true,
  },
  {
    id: 'pddikti-admin',
    title: 'PDDikti Admin',
    description: 'PDDikti Administration Portal',
    role: 'Penetration Tester / Security Remediation',
    highlights: [
      'Performed authorized penetration testing to identify application vulnerabilities and security weaknesses.',
      'Documented findings with supporting evidence, potential impact, and recommended remediation steps.',
      'Implemented fixes for identified findings in coordination with the development team.',
      'Retested resolved findings to validate remediation and identify any remaining security risks.',
    ],
    impact:
      'Reduced application security risk by turning penetration test findings into verified fixes, improving the security posture and resilience of the PDDikti administration portal.',
    tech: [],
    icon: 'fas fa-shield-halved',
    image: pddiktiAdminThumb,
    liveUrl: 'https://pddikti-admin.kemdiktisaintek.go.id',
  },
]
