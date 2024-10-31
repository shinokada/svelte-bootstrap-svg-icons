import type { MetaProps } from 'runes-meta-tags';
import { ANALYTICS_ID } from '$env/static/private';

const title = 'Svelte Bootstrap SVG Icons';
const description = 'Bootstrap icons for Svelte 4, 5, and Runes';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-bootstrap-svg-icons';
const keywords = 'svelte, sveltekit, svg, icons, bootstrap icons';

export const load = ({ url }) => {
  const layoutMetaTags: MetaProps = {
    title,
    description,
    keywords,
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      handle: '@shinokada',
      title,
      description,
      image: imgUrl,
      imageAlt: title
    },
    og: {
      type: 'website',
      title,
      description,
      url: url.href,
      image: imgUrl,
      imageAlt: title,
      siteName: title,
      imageWidth: '1200',
      imageHeight: '630'
    }
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID
  };
};
