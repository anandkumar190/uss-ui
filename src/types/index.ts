export type ProjectCategory = "Banking" | "Retail" | "Corporate";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  imageUrl: string;
  year: string;
  location: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface ContactSubmission {
  id: bigint;
  name: string;
  email: string;
  message: string;
  timestamp: bigint;
}
