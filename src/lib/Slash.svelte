<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'slash';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	class="bi bi-slash"
	fill={color}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 16 16"
>
	<path d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z" />
</svg>
