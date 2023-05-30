<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'chevron compact up';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class="bi bi-chevron-compact-up"
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
    d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
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
