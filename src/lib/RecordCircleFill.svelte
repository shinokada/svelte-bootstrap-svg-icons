<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'record circle fill';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	class="bi bi-record-circle-fill"
	fill={color}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 16 16"
>
	<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
</svg>
