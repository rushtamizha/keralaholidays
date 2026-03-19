// src/app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://www.aventurakeralaholidays.com/sitemap.xml',
  };
}
