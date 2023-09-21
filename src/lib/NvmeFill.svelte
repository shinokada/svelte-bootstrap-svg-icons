<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'nvme fill';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class="bi bi-nvme-fill"
  fill={color}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  viewBox="0 0 16 16"
>
  <path d="M6 7H5v2h1V7Zm6 0H9v2h3V7Z" />
  <path
    d="M2 4a.5.5 0 0 0-.5.5h-1A.5.5 0 0 0 0 5v1a.5.5 0 0 0 .5.5h1a.25.25 0 0 1 0 .5h-1a.5.5 0 0 0-.5.5V11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5.5h13.5a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5.5.5 0 0 1 0-1A.5.5 0 0 0 16 7V4.5a.5.5 0 0 0-.5-.5H2Zm2 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3Zm4 0a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-3Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-bootstrap-svg-icons.vercel.app)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'nvme fill';
-->
