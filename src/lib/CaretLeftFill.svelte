<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'caret left fill';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class="bi bi-caret-left-fill"
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
    d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
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
