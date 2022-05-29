<script>
	export let size = '16';
	export let color = 'currentColor';
	export let ariaLabel = 'arrow 90deg up';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	class="bi bi-arrow-90deg-up"
	fill={color}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 16 16"
>
	<path
		fill-rule="evenodd"
		d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
	/>
</svg>
