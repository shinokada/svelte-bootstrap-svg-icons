<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'lock fill';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	class="bi bi-lock-fill"
	fill={color}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 16 16"
>
	<path
		d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
	/>
</svg>
