<script>
  export let size = '16';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'h circle';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class="bi bi-h-circle"
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
    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-5-3.998V12H9.67V8.455H6.33V12H5V4.002h1.33v3.322h3.34V4.002H11Z"
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
