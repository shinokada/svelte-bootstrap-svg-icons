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
    d="M.969 0H0v.969h.5V1h.469V.969H1V.5H.969zm.937 1h.938V0h-.938zm1.875 0h.938V0H3.78v1zm1.875 0h.938V0h-.938zM7.531.969V1h.938V.969H8.5V.5h-.031V0H7.53v.5H7.5v.469zM9.406 1h.938V0h-.938zm1.875 0h.938V0h-.938zm1.875 0h.938V0h-.938zm1.875 0h.469V.969h.5V0h-.969v.5H15v.469h.031zM1 2.844v-.938H0v.938zm6.5-.938v.938h1v-.938zm7.5 0v.938h1v-.938zM1 4.719V3.78H0v.938h1zm6.5-.938v.938h1V3.78h-1zm7.5 0v.938h1V3.78h-1zM1 6.594v-.938H0v.938zm6.5-.938v.938h1v-.938zm7.5 0v.938h1v-.938zM.5 8.5h.469v-.031H1V7.53H.969V7.5H.5v.031H0v.938h.5zm1.406 0h.938v-1h-.938zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938zm2.813 0v-.031H8.5V7.53h-.031V7.5H7.53v.031H7.5v.938h.031V8.5zm.937 0h.938v-1h-.938zm1.875 0h.938v-1h-.938zm1.875 0h.938v-1h-.938zm1.875 0h.469v-.031h.5V7.53h-.5V7.5h-.469v.031H15v.938h.031zM0 9.406v.938h1v-.938zm7.5 0v.938h1v-.938zm8.5.938v-.938h-1v.938zm-16 .937v.938h1v-.938zm7.5 0v.938h1v-.938zm8.5.938v-.938h-1v.938zm-16 .937v.938h1v-.938zm7.5 0v.938h1v-.938zm8.5.938v-.938h-1v.938zM0 15h16v1H0z"
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
