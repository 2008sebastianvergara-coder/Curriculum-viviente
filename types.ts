export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'core' | 'methodology' | 'soft' | 'tools';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  type: 'academic' | 'management' | 'teaching';
}

export interface Publication {
  id: string;
  title: string;
  type: 'paper' | 'book' | 'conference';
  journal?: string;
  year: string;
  link?: string;
  authors?: string;
}

export interface Conference {
  id: string;
  title: string;
  event: string;
  location: string;
  year: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details: string[];
}

export interface Honor {
  id: string;
  title: string;
  institution: string;
  year: string;
}

export interface HighlightBook {
  title: string;
  subtitle?: string;
  description: string;
  downloadUrl: string;
  webUrl?: string;
  coverUrl?: string;
}

export interface PersonalProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    tagline: string;
    location: string;
    email: string;
    phone: string;
    about: string;
    avatarUrl: string;
    cvUrl: string;
    linkedinUrl: string;
  };
  stats: {
    yearsExperience: number;
    papersPublished: number;
    thesesSupervised: number;
    awardsWon: number;
  };
  highlightBook: HighlightBook;
  highlightManual: HighlightBook;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  honors: Honor[];
  publications: Publication[];
  conferences: Conference[];
  researchProjects: {
    id: string;
    role: string;
    title: string;
    source: string;
    year: string;
  }[];
  personalProjects: PersonalProject[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}