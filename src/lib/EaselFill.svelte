<script>
  export let size = '16';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'easel fill';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class="bi bi-easel-fill"
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
    d="M8.473.337a.5.5 0 0 0-.946 0L6.954 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1.85l-1.323 3.837a.5.5 0 1 0 .946.326L4.908 11H7.5v2.5a.5.5 0 0 0 1 0V11h2.592l1.435 4.163a.5.5 0 0 0 .946-.326L12.15 11H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9.046L8.473.337z"
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
