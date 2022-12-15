<script>
  export let size = '16';
  export let color = 'currentColor';
  export let ariaLabel = 'three dots';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class="bi bi-three-dots"
  fill={color}
  {...$$restProps}
  aria-label={ariaLabel}
  viewBox="0 0 16 16"
>
  <path
    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
  />
</svg>
