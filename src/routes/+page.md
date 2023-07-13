# Svelte Bootstrap SVG Icons

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-bootstrap-svg-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-bootstrap-svg-icons" alt="npm" height="25" style="height: 25px !important;"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25" style="height: 25px !important;"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-bootstrap-svg-icons" alt="License" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-bootstrap-svg-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-bootstrap-svg-icons.svg" alt="npm" height="25" style="height: 25px !important;"></a>
</div>

1950+ SVG file icon components for Svelte. Svelte-bootstrap-svg-icons support major CSS frameworks using the `class` props.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

## Repo

[GitHub Repo](https://github.com/shinokada/svelte-awesome-icons)

## Original source

[twbs/icons](https://github.com/twbs/icons)

## License

[Svelte-Bootstrap-SVG-Icons License](https://github.com/shinokada/svelte-awesome-icons/LICENSE)

[Icons License](https://github.com/twbs/icons/blob/main/LICENSE)

## Installation

```sh
pnpm i -D svelte-bootstrap-svg-icons
```

## Usages

In a svelte file:

```html
<script>
  import { BadgeAr } from 'svelte-bootstrap-svg-icons';
</script>

<BadgeAr />
```

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import BadgeAr from 'svelte-bootstrap-svg-icons/BadgeAr.svelte';
</script>

<BadgeAr />
```

If you are a TypeScript user, **install typescript version 5.0.0 or above.**

```sh
pnpm i -D typescript@beta
```

To avoid any complaints from the editor, add `node16` or `nodenext` to `moduleResolution` in your tsconfig.json file.

```json
{
  //...
  "compilerOptions": {
    // ...
    "moduleResolution": "nodenext"
  }
}
```

## Props

- size = '16';
- role = 'img';
- color = 'currentColor';
- ariaLabel = '0 circle fill';

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, props, and events.

## Size

Use the `size` prop to change the size of icons.

```html
<BadgeAr size="40" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<BadgeAr color="#c61515" />
```

## CSS framworks suport

You can apply CSS framework color and other attributes directly to the icon component or its parent tag using the `class` prop.

Tailwind CSS example:

```html
<BadgeAr class="h-24 w-24 text-blue-700 mr-4" />
```

Bootstrap examples:

```html
<BadgeAr class="position-absolute top-0 px-1" />
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<BadgeAr class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `BadgeAr` has `aria-label="badge ar"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<BadgeAr ariaLabel="Awesome Badge" />
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<BadgeAr tabindex="-1" />
```

## Events

All icons have the following events:

- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout


## Passing down other attributes

You can pass other attibutes as well.

```html
<BadgeAr tabindex="0" />
```

## Using svelte:component

```html
<script>
  import { BadgeAr } from 'svelte-bootstrap-svg-icons';
</script>

<svelte:component this="{BadgeAr}" />
```

## Using onMount

```html
<script>
  import { BadgeAr } from 'svelte-bootstrap-svg-icons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new BadgeAr({ target: document.body, props });
  });
</script>
```

## Import all

Use `import * as Icon from 'svelte-bootstrap-svg-icons`.

```html
<script>
  import * as Icon from 'svelte-bootstrap-svg-icons';
</script>

<Icon.BadgeAr />
<Icon.ClipboardFill />

<h1>Size</h1>
<Icon.BadgeAr size="30" />
<Icon.ClipboardFill size="40" />

<h1>CSS HEX color</h1>
<Icon.BadgeAr color="#c61515" size="40" />

<h1>Tailwind CSS</h1>
<Icon.BadgeAr class="text-blue-500" />
<Icon.ClipboardFill class="text-pink-700" />
```

## Other icons

[Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)

