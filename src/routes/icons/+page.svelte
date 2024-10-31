<script lang="ts">
  import { IconPage, filterStringKeys } from 'runes-webkit';
  import * as icons from '$lib';

  const keyIcons = filterStringKeys(icons);
</script>

<IconPage
  icons={keyIcons}
  title="Icons - Svelte Bootstrap SVG Icons"
  defaultSize="16"
  minSize="12"
  maxSize="40"
  tab1Class="md:grid-cols-2 lg:grid-cols-3"
/>
