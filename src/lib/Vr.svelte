<script>
  export let size = '16';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'vr';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class="bi bi-vr"
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
    d="M3 12V4a1 1 0 0 1 1-1h2.5V2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5v-1H4a1 1 0 0 1-1-1zm6.5 1v1H12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9.5v1H12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9.5zM8 16a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5z"
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
