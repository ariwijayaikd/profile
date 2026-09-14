export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  location?: string
  highlights: string[]
  impact: string
}

export const experiences: ExperienceItem[] = [
  {
    id: 'ministry-contract-junior-devops',
    role: 'Contract Junior DevOps',
    company: 'Ministry of Education and Culture Republic of Indonesia',
    period: 'Aug 2021 — Dec 2026',
    highlights: [
      'Managed application infrastructure and operations, including API services, deployments, monitoring systems, source code repositories, and production environment support across multiple applications.',
      'Designed and maintained automated CI/CD pipelines using GitHub Actions, GitLab CI/CD, Docker, and Bash, reducing manual deployment processes and improving deployment consistency across development and production environments.',
      'Managed containerized application deployments using Docker and Docker Swarm, including service configuration, image versioning, environment management, rolling updates, and production troubleshooting.',
      'Built and maintained a private Docker registry for PDDikti, providing centralized and controlled storage for application container images used across development and deployment workflows.',
      'Designed and implemented infrastructure monitoring solutions using Grafana, Prometheus, VictoriaMetrics, Alertmanager, Blackbox Exporter, Node Exporter, and cAdvisor to monitor application availability, server resources, and service performance.',
      'Managed and supported infrastructure components including Linux servers, Nginx, SSL/TLS certificates, reverse proxies, DNS, and application networking across multiple environments.',
      'Supported and maintained data infrastructure involving PostgreSQL, Microsoft SQL Server, Elasticsearch, and Redis, including troubleshooting connectivity, performance, replication, and application integration issues.',
      'Designed DevOps and infrastructure architecture diagrams based on application and operational requirements, and presented proposed solutions, implementation approaches, and technical trade-offs to stakeholders and engineering teams.',
      'Coordinated cross-functional teams across software development, infrastructure, and operations, while taking additional responsibilities similar to Technical Lead, Project Manager, and Engineering Manager for selected projects.',
      'Planned technical implementations, coordinated task execution, identified infrastructure risks and dependencies, and ensured solutions were aligned with application requirements and operational constraints.',
      'Supported production incident investigation and troubleshooting across application, container, database, networking, and infrastructure layers to maintain service reliability and availability.',
      'Contributed to DevSecOps practices by integrating deployment validation, vulnerability and security testing, infrastructure monitoring, and operational controls into application delivery workflows.',
    ],
    impact:
      'Reduced manual deployment work and improved delivery consistency through automated pipelines and containerized workflows. Centralized container image management, expanded infrastructure observability, strengthened production troubleshooting and DevSecOps controls, and improved coordination between development, infrastructure, operations, and stakeholders.',
  },
]
