<script>
  import { setContext } from 'svelte';
  import { Activity } from 'svelte-bootstrap-svg-icons';
  const iconCtx = {
    size: '30'
  };
  setContext('iconCtx', iconCtx);
</script>

<Activity color="#ff4488" />
