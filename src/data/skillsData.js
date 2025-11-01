import { Code, Database, Cloud, Wrench } from 'lucide-react';

export const skillsData = [
  {
    id: 1,
    title: 'Programming Languages',
    icon: Code,
    iconColor: 'text-blue-400',
    borderColor: 'hover:border-blue-500',
    shadowColor: 'hover:shadow-blue-500/20',
    skills: ['Java', 'Python'],
    animationDelay: '0s'
  },
  {
    id: 2,
    title: 'Databases',
    icon: Database,
    iconColor: 'text-green-400',
    borderColor: 'hover:border-green-500',
    shadowColor: 'hover:shadow-green-500/20',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server', 'RDS'],
    animationDelay: '0.1s'
  },
  {
    id: 3,
    title: 'Frameworks',
    icon: Code,
    iconColor: 'text-purple-400',
    borderColor: 'hover:border-purple-500',
    shadowColor: 'hover:shadow-purple-500/20',
    skills: ['Spring Boot', 'React', 'Angular', 'jQuery', 'Apache Kafka'],
    animationDelay: '0.2s'
  },
  {
    id: 4,
    title: 'Cloud Platforms',
    icon: Cloud,
    iconColor: 'text-yellow-400',
    borderColor: 'hover:border-yellow-500',
    shadowColor: 'hover:shadow-yellow-500/20',
    skills: ['AWS'],
    animationDelay: '0.3s'
  },
  {
    id: 5,
    title: 'Web Development',
    icon: Code,
    iconColor: 'text-orange-400',
    borderColor: 'hover:border-orange-500',
    shadowColor: 'hover:shadow-orange-500/20',
    skills: ['Node.js', 'JavaScript'],
    animationDelay: '0.4s'
  },
  {
    id: 6,
    title: 'Tools & Others',
    icon: Wrench,
    iconColor: 'text-red-400',
    borderColor: 'hover:border-red-500',
    shadowColor: 'hover:shadow-red-500/20',
    skills: ['Git', 'Bitbucket', 'Jenkins', 'Gitlab', 'Postman', 'Atlassian', 'Jira', 'Confluence', 'Android', 'Selenium', 'Elastic Search'],
    animationDelay: '0.5s'
  }
];

export const certifications = [
  'Qualified GATE (CS/IT) - 2024',
  'Solved 500+ DSA Problems on GeeksforGeeks and LeetCode',
  'B.Tech. (Computer Science & Engineering) - Moradabad Institute of Technology (8.29 CGPA)'
];

