// =========================================================
// WRITING / ARTICLES CONTENT
// Add verified articles here; never scrape at runtime
// =========================================================

export interface Article {
  title: string
  description: string
  url: string
  platform: string
  date: string
  readingTime?: string
}

export const ARTICLES: Article[] = [
  // Add verified Medium / external articles here as you write them
  // Example:
  // {
  //   title: 'Building a Semantic Layer on Databricks with Knowledge Graphs',
  //   description: 'How governed semantic mappings improve data trust and explainability in lakehouses.',
  //   url: 'https://medium.com/@rk9128557489/...',
  //   platform: 'Medium',
  //   date: '2025-08',
  // },
]

// Set to true to show a "coming soon / Medium link" empty state
export const WRITING_COMING_SOON = true
export const MEDIUM_URL = 'https://medium.com/@rk9128557489'
