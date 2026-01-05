
export interface Skill {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Mobile' | 'Crawler';
  proficiency: number;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  projectType?: 'Internal' | 'Commercial' | 'Personal' | 'Tool';
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
