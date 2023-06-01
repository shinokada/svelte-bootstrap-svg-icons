<script>
  export let size = '16';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'file ruled';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class="bi bi-file-ruled"
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
    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v4h10V2a1 1 0 0 0-1-1H4zm9 6H6v2h7V7zm0 3H6v2h7v-2zm0 3H6v2h6a1 1 0 0 0 1-1v-1zm-8 2v-2H3v1a1 1 0 0 0 1 1h1zm-2-3h2v-2H3v2zm0-3h2V7H3v2z"
  />
</svg>
<!--
@component
[Go to Document](https://svelte-bootstrap-svg-icons.codewithshin.com/)
## Props
@prop size = '16';
@prop role = 'img';
@prop color = 'currentColor';
@prop ariaLabel = 'icon name';
## Event
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->
