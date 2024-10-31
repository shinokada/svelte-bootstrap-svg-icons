import type { MetaProps } from 'runes-meta-tags';

const title = 'Setting Global Icon - Svelte Bootstrap SVG Icons';
const description = 'How to create a global icon using setContext with Svelte Bootstrap SVG Icons';
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
