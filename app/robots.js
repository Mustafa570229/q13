export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://kyooadmin.vercel.app/sitemap.xml',
    }
  }