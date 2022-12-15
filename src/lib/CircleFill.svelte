<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'circle fill';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class="bi bi-circle-fill"
  fill={color}
  {...$$restProps}
  aria-label={ariaLabel}
  viewBox="0 0 16 16"
>
  <circle cx="8" cy="8" r="8" />
</svg>
