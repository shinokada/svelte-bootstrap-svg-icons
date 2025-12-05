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
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
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
    fill-rule="evenodd"
    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 1a7 7 0 0 0-3.115.73.48.48 0 0 0 .137.292.488.488 0 0 1-.126.78l-.292.145a.7.7 0 0 0-.187.136l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a1 1 0 0 0-.461-.041A6.97 6.97 0 0 0 1 8a6.96 6.96 0 0 0 .883 3.403l.86-.213c.444-.112.757-.512.757-.971v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .153-1.54L3.12 6.622a.415.415 0 0 1 .542-.624l1.09.817a.5.5 0 0 0 .523.047A.5.5 0 0 1 6 7.31v.455a.8.8 0 0 0 .13.432l.796 1.193a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189q.042-.127.116-.238l.791-1.187A.45.45 0 0 1 11.743 8c.16 0 .306.083.392.218.557.875 1.63 2.282 2.365 2.282l.04-.003A7 7 0 0 0 8 1"
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
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
