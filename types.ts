export interface Project {
  id: string;
  title: string;
  category: 'Fullstack' | 'Client Lourd' | 'Client Léger' | 'Hackathon' | 'Data';
  description: string;
  techStack: string[];
  imageUrl?: string;
  link?: string;
}

export interface TimelineItem {
  id: string;
  category: 'experience' | 'education';
  title: string; // Role or Degree
  subtitle: string; // Company or School
  period: string;
  description: string;
  details?: string[]; // Tasks for exp, details for edu
  logoInitial: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
