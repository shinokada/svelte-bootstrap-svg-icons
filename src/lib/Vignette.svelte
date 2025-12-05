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
  <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8" />
  <path
    d="M8.5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.683-6.281a.5.5 0 1 1-.866-.5.5.5 0 0 1 .866.5m-3.5 6.062a.5.5 0 1 1-.866-.5.5.5 0 0 1 .866.5m4.598-4.598a.5.5 0 1 1-.5-.866.5.5 0 0 1 .5.866m-6.062 3.5a.5.5 0 1 1-.5-.866.5.5 0 0 1 .5.866M11.5 8.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-7 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m6.281 1.683a.5.5 0 1 1 .5-.866.5.5 0 0 1-.5.866m-6.062-3.5a.5.5 0 1 1 .5-.866.5.5 0 0 1-.5.866m4.598 4.598a.5.5 0 1 1 .866-.5.5.5 0 0 1-.866.5m-3.5-6.062a.5.5 0 1 1 .866-.5.5.5 0 0 1-.866.5"
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
