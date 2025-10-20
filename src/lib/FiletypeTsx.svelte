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

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
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
    d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.172 14.841a1.13 1.13 0 0 0 .401.823q.193.162.478.252.283.091.665.091.507 0 .858-.158.354-.158.54-.44a1.17 1.17 0 0 0 .187-.656q0-.336-.135-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.566-.21l-.62-.144a1 1 0 0 1-.405-.176.37.37 0 0 1-.144-.299q0-.234.185-.384.188-.152.513-.152.213 0 .369.068a.6.6 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.2-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.438 0-.776.15-.336.149-.527.421-.19.273-.19.639 0 .302.122.524.124.223.352.367.228.143.54.213l.617.144q.311.073.463.193a.39.39 0 0 1 .152.326.5.5 0 0 1-.084.29.56.56 0 0 1-.255.193 1.1 1.1 0 0 1-.413.07q-.177 0-.32-.04a.8.8 0 0 1-.249-.115.58.58 0 0 1-.255-.384zm-1.244 1.09v-3.337h1.136v-.662H0v.662h1.134v3.337zm7.076-3.999h.893l-1.274 2.007 1.254 1.992h-.909l-.85-1.415h-.034l-.853 1.415H6.37l1.239-2.016-1.228-1.983h.932l.832 1.438h.035z"
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
