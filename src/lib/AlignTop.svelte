<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'align top';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class="bi bi-align-top"
  fill={color}
  {...$$restProps}
  aria-label={ariaLabel}
  on:click
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  on:blur
  on:focus
  viewBox="0 0 16 16"
>
  <rect width="4" height="12" rx="1" transform="matrix(1 0 0 -1 6 15)" />
  <path d="M1.5 2a.5.5 0 0 1 0-1v1zm13-1a.5.5 0 0 1 0 1V1zm-13 0h13v1h-13V1z" />
</svg>
<!--
@component
[Go to Document](https://svelte-ant-design-icons.codewithshin.com/)
## Props
@prop size = '16';
@prop color = 'currentColor';
@prop ariaLabel = 'icon name';
## Event
- on:click
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
- on:blur
- on:focus
-->
