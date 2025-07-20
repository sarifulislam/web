const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

async function generateSitemap() {
  // Base URL of the site
  const baseUrl = 'https://chatwhole.com';

  // Read blog posts data
  const blogPostsPath = path.join(__dirname, '../src/data/blogPosts.json');
  const blogPostsData = JSON.parse(fs.readFileSync(blogPostsPath, 'utf-8'));

  // Find latest blog post by date
  const latestBlogPost = blogPostsData.reduce((latest, post) => {
    return new Date(post.date) > new Date(latest.date) ? post : latest;
  }, blogPostsData[0]);

  // URLs to include in sitemap
  const urls = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/contact', changefreq: 'monthly', priority: 0.9 },
    { url: '/get-demo', changefreq: 'monthly', priority: 0.9 },
    { url: '/blog', changefreq: 'weekly', priority: 1.0 },
    ...blogPostsData.map(post => ({
      url: `/blog/${post.id}`,
      changefreq: 'monthly',
      priority: 0.9
    })),
    { url: '/services', changefreq: 'monthly', priority: 0.9 }
  ];

  // Create sitemap stream
  const sitemapStream = new SitemapStream({ hostname: baseUrl });

  // Write URLs to sitemap stream
  urls.forEach(({ url, changefreq, priority }) => {
    sitemapStream.write({ url, changefreq, priority });
  });

  sitemapStream.end();

  // Generate sitemap XML
  const sitemap = await streamToPromise(sitemapStream).then(data => data.toString());

  // Write sitemap.xml to public directory
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);

  // Also write sitemap.xml to build directory if exists
  const buildSitemapPath = path.join(__dirname, '../build/sitemap.xml');
  if (fs.existsSync(path.join(__dirname, '../build'))) {
    fs.writeFileSync(buildSitemapPath, sitemap);
  }

  console.log('Sitemap generated successfully.');
}

generateSitemap().catch(err => {
  console.error('Error generating sitemap:', err);
  process.exit(1);
});
