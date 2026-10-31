export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  date: string;
  tags: string[];
  excerpt?: string; // Optional - will auto-generate from first line if not provided
  readingTime: string;
  markdownFile: string;
};
