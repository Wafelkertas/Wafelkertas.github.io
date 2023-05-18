import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  

  const routes = ['', '/about'].map(
    (route) => ({
      url: `https://leerob.io${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes];
}
