import type { MetaProps } from 'runes-meta-tags';

const title = 'Props - Svelte Bootstrap SVG Icons v1';
const description = 'How to use Svelte Bootstrap SVG Icons v1 props';
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
