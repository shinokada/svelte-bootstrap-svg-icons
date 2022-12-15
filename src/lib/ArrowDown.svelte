<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'arrow down';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class="bi bi-arrow-down"
  fill={color}
  {...$$restProps}
  aria-label={ariaLabel}
  viewBox="0 0 16 16"
>
  <path
    fill-rule="evenodd"
    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
  />
</svg>
