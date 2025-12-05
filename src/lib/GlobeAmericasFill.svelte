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
    d="m8 0 .412.01A7.97 7.97 0 0 1 13.29 2a8.04 8.04 0 0 1 2.548 4.382 8 8 0 1 1-15.674 0 8 8 0 0 1 1.361-3.078A8 8 0 0 1 2.711 2 7.96 7.96 0 0 1 8 0m0 1a7 7 0 0 0-5.958 3.324C2.497 6.192 6.669 7.827 6.5 8c-.5.5-1.034.884-1 1.5.07 1.248 2.259.774 2.5 2 .202 1.032-1.051 3 0 3 1.5-.5 3.798-3.186 4-5 .138-1.242-2-2-3.5-2.5-.828-.276-1.055.648-1.5.5S4.5 5.5 5.5 5s1 0 1.5.5c1 .5.5-1 1-1.5.838-.838 3.16-1.394 3.605-2.001A6.97 6.97 0 0 0 8 1"
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
