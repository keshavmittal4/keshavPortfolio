export interface Skill {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Design';
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}
