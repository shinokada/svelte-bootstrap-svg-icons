<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'cassette';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class="bi bi-cassette"
  fill={color}
  {...$$restProps}
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
    d="M4 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 6a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2H7Z"
  />
  <path
    d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13ZM1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-.691l-1.362-2.724A.5.5 0 0 0 12 10H4a.5.5 0 0 0-.447.276L2.19 13H1.5a.5.5 0 0 1-.5-.5v-9ZM11.691 11l1 2H3.309l1-2h7.382Z"
  />
</svg>
<!--
@component
[Go to Document](https://svelte-bootstrap-svg-icons.codewithshin.com/)
## Props
@prop size = '16';
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
