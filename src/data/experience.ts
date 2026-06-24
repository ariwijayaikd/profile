export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  location?: string
  highlights: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: 'kemdikbud-junior-devops',
    role: 'Junior DevOps',
    company: 'Kementerian Pendidikan Tinggi, Sains, dan Teknologi',
    period: 'Jul 2022 — Present',
    location: 'Jakarta, Indonesia',
    highlights: [
      'Manage organization repositories and private container registry.',
      'Design and maintain CI/CD pipelines for consistent application delivery.',
      'Support application development and day-to-day infrastructure operations.',
    ],
  },
  {
    id: 'kemdikbud-api-devops',
    role: 'API Developer & DevOps',
    company: 'Kementerian Pendidikan dan Kebudayaan',
    period: 'Aug 2021 — Jul 2022',
    location: 'Jakarta, Indonesia',
    highlights: [
      'Part of the Satudikti team as DevOps engineer and backend developer.',
      'Built APIs with Go and the Echo framework.',
      'Implemented CI/CD workflows using Jenkins and GitHub Actions.',
    ],
  },
  {
    id: 'bangkit-cloud',
    role: 'Cloud Computing Path',
    company: 'Bangkit Academy (Google, Tokopedia, Gojek, Traveloka)',
    period: 'Feb 2021 — Oct 2021',
    highlights: [
      'Selected among 3,000 participants from 40,000+ applicants.',
      'Completed hands-on cloud labs via Qwiklabs, Coursera, and Dicoding.',
      'Led team capstone project: Suicide Monitoring Handling and Controlling.',
    ],
  },
]
