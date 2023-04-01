import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: '101 polar bears | Blog',
    description: 'My journey learning Astro',
    site: 'https://101polarbears.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}
