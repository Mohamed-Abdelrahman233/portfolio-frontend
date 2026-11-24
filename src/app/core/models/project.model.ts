export interface IProject {
  _id?: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  isFeatured: boolean;
}
