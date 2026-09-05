export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  image: string;
  colSpan: number; // 7 or 5
  description: string;
  badge?: string;
  client?: string;
  deliverables?: string[];
  link?: string;
  externalLink?: boolean;
}

export interface JournalEntry {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  link?: string;
  externalLink?: boolean;
}

export interface ExplorationItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspectRatio?: string;
  rotation: number;
  description: string;
  externalLink?: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
}
