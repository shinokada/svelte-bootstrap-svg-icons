<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'gender male';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class="bi bi-gender-male"
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
  <path
    fill-rule="evenodd"
    d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
  />
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
