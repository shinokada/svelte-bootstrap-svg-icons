<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    ariaLabel = 'badge 3d fill',
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  aria-label={ariaLabel}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 16 16"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M10.157 5.968h-.844v4.06h.844c1.116 0 1.621-.667 1.621-2.02 0-1.354-.51-2.04-1.621-2.04"
  />
  <path
    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.184 4.368c.646 0 1.055.378 1.06.9.008.537-.427.919-1.086.919-.598-.004-1.037-.325-1.068-.756H3c.03.914.791 1.688 2.153 1.688 1.24 0 2.285-.66 2.272-1.798-.013-.953-.747-1.38-1.292-1.432v-.062c.44-.07 1.125-.527 1.108-1.375-.013-.906-.8-1.57-2.053-1.565-1.31.005-2.043.734-2.074 1.67h1.103c.022-.391.383-.751.936-.751.532 0 .928.33.928.813.004.479-.383.835-.928.835h-.632v.914zM8.126 11h2.189C12.125 11 13 9.893 13 7.985c0-1.894-.861-2.984-2.685-2.984H8.126z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-bootstrap-svg-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop title
@prop desc
@prop ariaLabel = 'badge 3d fill'
@prop ...restProps
-->
