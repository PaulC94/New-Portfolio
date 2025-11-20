import { Project, TimelineItem } from './types';

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'efrei',
    category: 'education',
    title: 'BTS SIO (2ème année)',
    subtitle: 'EFREI Paris',
    period: 'En cours',
    description: 'Formation technique supérieure (Services Informatiques aux Organisations).',
    details: [
      'Option SLAM (Solutions Logicielles et Applications Métiers)',
      'Objectif futur : Spécialisation Data / Big Data'
    ],
    logoInitial: 'E',
    color: 'bg-indigo-600'
  },
  {
    id: 'extia',
    category: 'experience',
    title: 'Stagiaire IT (2ème année)',
    subtitle: 'Extia',
    period: '5 semaines',
    description: "Stage d'observation et d'apprentissage global du domaine de l'IT en entreprise.",
    details: [
      "Découverte de l'infrastructure d'une ESN",
      "Observation des projets et des équipes techniques",
      "Apprentissage des méthodologies de travail en entreprise",
      "Veille technologique"
    ],
    logoInitial: 'Ex',
    color: 'bg-orange-500'
  },
  {
    id: 'mairie',
    category: 'experience',
    title: 'Stagiaire Support IT (1ère année)',
    subtitle: 'Mairie du Perreux-sur-Marne',
    period: '8 semaines',
    description: "Stage technique au sein du service informatique de la mairie.",
    details: [
      "Installation et configuration complète de Zabbix (Supervision)",
      "Support technique aux utilisateurs (Helpdesk)",
      "Maintenance du parc informatique",
      "Résolution d'incidents réseaux et systèmes"
    ],
    logoInitial: 'M',
    color: 'bg-blue-600'
  },
  {
    id: 'lycee',
    category: 'education',
    title: 'Baccalauréat Général',
    subtitle: 'Lycée Paul Doumer',
    period: 'Le Perreux-sur-Marne',
    description: 'Parcours général avec spécialités scientifiques.',
    details: [
      'Spécialité Mathématiques',
      'Spécialité SES (Sciences Économiques et Sociales)'
    ],
    logoInitial: 'L',
    color: 'bg-purple-600'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'manga-hackathon',
    title: 'Manga Explorer (Hackathon)',
    category: 'Hackathon',
    description: "Application web développée lors d'un Hackathon. Utilisation de l'API Jikan pour récupérer des données d'animes et mangas.",
    techStack: ['React', 'API Jikan', 'Axios', 'Tailwind'],
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 'fullstack',
    title: 'App Fullstack',
    category: 'Fullstack',
    description: "Développement d'une solution web complète avec Back-end et Front-end connectés.",
    techStack: ['Node.js', 'React', 'Express', 'Database'],
    imageUrl: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 'client-lourd',
    title: 'Application Client Lourd',
    category: 'Client Lourd',
    description: "Logiciel de bureau performant pour la gestion de données locales.",
    techStack: ['C#', '.NET', 'WPF', 'SQL'],
    imageUrl: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: 'client-leger',
    title: 'Site Client Léger',
    category: 'Client Léger',
    description: "Interface web légère accessible via navigateur pour des besoins intranet.",
    techStack: ['HTML', 'CSS', 'PHP', 'MySQL'],
    imageUrl: 'https://picsum.photos/800/600?random=4'
  },
  {
    id: 'elearning',
    title: 'Plateforme E-Learning',
    category: 'Client Léger',
    description: "Site éducatif complet pour l'apprentissage en ligne réalisé avec Wix.",
    techStack: ['Wix', 'CMS', 'Web Design'],
    imageUrl: 'https://picsum.photos/800/600?random=5',
    link: 'https://paulc94.ovh'
  }
];

export const BIO = `Je suis étudiant en 2ème année de BTS SIO à l'EFREI. J'ai effectué mon lycée à Paul Doumer (Le Perreux-sur-Marne) avec un Bac spé Maths/SES. Passionné par le développement Fullstack, je souhaite m'orienter plus tard vers les métiers de la Data.`;

export const EDUCATIONS = [
  {
    id: 'efrei',
    school: 'EFREI Paris',
    degree: 'BTS SIO (2ème année)',
    period: 'En cours',
    details: 'Formation technique supérieure (Services Informatiques aux Organisations). Option SLAM (Solutions Logicielles et Applications Métiers). Objectif futur : Spécialisation Data / Big Data.'
  },
  {
    id: 'lycee',
    school: 'Lycée Paul Doumer',
    degree: 'Baccalauréat Général',
    period: 'Le Perreux-sur-Marne',
    details: 'Parcours général avec spécialités scientifiques. Spécialité Mathématiques et SES (Sciences Économiques et Sociales).'
  }
];