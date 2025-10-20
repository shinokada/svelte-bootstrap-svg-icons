import type { MetaProps } from 'runes-meta-tags';

const title = 'Getting Started - Svelte Bootstrap SVG Icons v3';
const description = 'How to get started with Svelte Bootstrap SVG Icons v3';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-bootstrap-svg-icons';

export const load = ({ url }) => {
  const pageMetaTags: MetaProps = {
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl,
      url: url.href
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  };
  return { pageMetaTags };
};
