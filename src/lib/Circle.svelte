<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'circle';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	class="bi bi-circle"
	fill={color}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 16 16"
>
	<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
</svg>
