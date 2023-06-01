<script>
  export let size = '16';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'rewind circle fill';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class="bi bi-rewind-circle-fill"
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
    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM7.729 5.055A.5.5 0 0 1 8 5.5v1.886l3.21-2.293A.5.5 0 0 1 12 5.5v5a.5.5 0 0 1-.79.407L8 8.614V10.5a.5.5 0 0 1-.79.407l-3.5-2.5a.5.5 0 0 1 0-.814l3.5-2.5a.5.5 0 0 1 .519-.038Z"
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
