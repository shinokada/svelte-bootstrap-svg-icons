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
    ariaLabel = 'envelope open heart fill',
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
    d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l4.222 2.475q.035-.087.08-.17c.665-1.3 2.362-1.917 3.698-1.25 1.336-.667 3.033-.05 3.699 1.25a3 3 0 0 1 .08.17L16 5.713V5.4a2 2 0 0 0-1.059-1.765zM0 6.873l4 2.344c-.012.542.124 1.117.416 1.694l.004.006L0 13.372v-6.5Zm.059 7.611 4.9-2.723c.563.73 1.383 1.467 2.49 2.198l.551.365.551-.365c1.107-.73 1.927-1.467 2.49-2.198l4.9 2.723A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516M16 13.372l-4.42-2.455.004-.006c.292-.577.428-1.152.415-1.694L16 6.873v6.5Z"
  /> <path d="M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
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
@prop ariaLabel = 'envelope open heart fill'
@prop ...restProps
-->
