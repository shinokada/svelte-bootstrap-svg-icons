<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '16';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'border middle';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class="bi bi-border-middle"
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
    d="M.969 0H0v.969h.5V1h.469V.969H1V.5H.969V0zm.937 1h.938V0h-.938v1zm1.875 0h.938V0H3.78v1zm1.875 0h.938V0h-.938v1zM8.5 16h-1V0h1v16zm.906-15h.938V0h-.938v1zm1.875 0h.938V0h-.938v1zm1.875 0h.938V0h-.938v1zm1.875 0h.469V.969h.5V0h-.969v.5H15v.469h.031V1zM1 2.844v-.938H0v.938h1zm14-.938v.938h1v-.938h-1zM1 4.719V3.78H0v.938h1zm14-.938v.938h1V3.78h-1zM1 6.594v-.938H0v.938h1zm14-.938v.938h1v-.938h-1zM.5 8.5h.469v-.031H1V7.53H.969V7.5H.5v.031H0v.938h.5V8.5zm1.406 0h.938v-1h-.938v1zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938v1zm3.75 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zm1.875 0h.469v-.031h.5V7.53h-.5V7.5h-.469v.031H15v.938h.031V8.5zM0 9.406v.938h1v-.938H0zm16 .938v-.938h-1v.938h1zm-16 .937v.938h1v-.938H0zm16 .938v-.938h-1v.938h1zm-16 .937v.938h1v-.938H0zm16 .938v-.938h-1v.938h1zM0 16h.969v-.5H1v-.469H.969V15H.5v.031H0V16zm1.906 0h.938v-1h-.938v1zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938v1zm3.75 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zm1.875-.5v.5H16v-.969h-.5V15h-.469v.031H15v.469h.031z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-bootstrap-svg-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '16';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'border middle';
-->
