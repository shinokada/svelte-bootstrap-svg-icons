<script>
  import { Activity } from 'svelte-bootstrap-svg-icons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new Activity({ target: document.body, props });
  });
</script>