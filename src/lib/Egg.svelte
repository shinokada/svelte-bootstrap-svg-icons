<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'egg';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class="bi bi-egg"
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
  <path
    d="M8 15a5 5 0 0 1-5-5c0-1.956.69-4.286 1.742-6.12.524-.913 1.112-1.658 1.704-2.164C7.044 1.206 7.572 1 8 1c.428 0 .956.206 1.554.716.592.506 1.18 1.251 1.704 2.164C12.31 5.714 13 8.044 13 10a5 5 0 0 1-5 5zm0 1a6 6 0 0 0 6-6c0-4.314-3-10-6-10S2 5.686 2 10a6 6 0 0 0 6 6z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-bootstrap-svg-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'egg';
-->
