import type { BlogPost } from '../../types/Blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to demoralise an engineer in two words: GitHub Actions',
    slug: 'github-actions-demoralise',
    date: '2026-10-26',
    tags: ['github', 'ci-cd', 'devops', 'workflows'],
    excerpt: 'A deep dive into the frustrations of GitHub Actions and CI/CD pipelines. From mysterious failures to YAML hell, discover why these two words can send shivers down an engineer\'s spine.',
    readingTime: '3 min read',
    markdownFile: '/blogs/blog-github-actions.md',
  },
];
