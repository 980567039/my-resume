
export interface Skill {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Mobile';
  proficiency: number;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
