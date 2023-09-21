<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'displayport fill';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class="bi bi-displayport-fill"
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
    d="M1 5a1 1 0 0 0-1 1v3.191a1 1 0 0 0 .553.894l1.618.81a1 1 0 0 0 .447.105H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H1Zm1.5 2h11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8H3v.5a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-bootstrap-svg-icons.vercel.app)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'displayport fill';
-->
