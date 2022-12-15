<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'plus lg';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class="bi bi-plus-lg"
  fill={color}
  {...$$restProps}
  aria-label={ariaLabel}
  viewBox="0 0 16 16"
>
  <path
    fill-rule="evenodd"
    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
  />
</svg>
