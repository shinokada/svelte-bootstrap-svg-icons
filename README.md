<h1 align="center">Svelte Bootstrap SVG Icons</h1>

<p align="center">
<a href="https://svelte-bootstrap-svg-icons.codewithshin.com/">Svelte-Bootstrap-SVG-Icons</a>
</p>

<p align="center">
<a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"><img src="https://img.shields.io/badge/PWA-enabled-brightgreen" alt="PWA Shield"></a>
<a href="https://www.npmjs.com/package/svelte-bootstrap-svg-icons" rel="nofollow"><img src="https://img.shields.io/npm/v/svelte-bootstrap-svg-icons" alt="npm"></a>
<a href="https://twitter.com/shinokada" rel="nofollow"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/github/license/shinokada/svelte-bootstrap-svg-icons" alt="License"></a>
<a href="https://www.npmjs.com/package/svelte-bootstrap-svg-icons" rel="nofollow"><img src="https://img.shields.io/npm/dw/svelte-bootstrap-svg-icons.svg" alt="npm"></a>
</p>

1660+ SVG file icon components for Svelte. Svelte-bootstrap-svg-icons support major CSS frameworks using the `class` props.

<p align="center">
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-bootstrap-svg-icons/main/static/images/bootstrap1.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-bootstrap-svg-icons/main/static/images/bootstrap2.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-bootstrap-svg-icons/main/static/images/bootstrap3.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-bootstrap-svg-icons/main/static/images/bootstrap4.webp" />
</p>

## Installation

```sh
npm i -D svelte-bootstrap-svg-icons
```

## REPL

[Demo](https://svelte.dev/repl/1613cc34aef7417783284b74e250c8e8)

## Icon name list

[Icon list](/icon-list.md)

## Usages

In a svelte file:

```html
<script>
  import { BadgeAr, ClipboardFill } from 'svelte-bootstrap-svg-icons';
</script>

<BadgeAr />
<ClipboardFill />
```

## Size

Use the `size` prop to change the size of icons.

```html
<BadgeAr size="40" /> <ClipboardFill size="40" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<BadgeAr color="#c61515" /> <ClipboardFill color="#3759e5" />
```

## CSS framworks suport

Use the `class` prop to change size, colors and add additional css.

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

## Original source

[twbs/icons](https://github.com/twbs/icons)

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)

## Experience lightning-fast browsing and offline access with Our PWA

This website can be downloaded and installed on your device for offline access as a Progressive Web App.

To install a PWA, look for the "Add to Home Screen" option in the browser's menu or settings. On most mobile devices, this option can be found by visiting the website, then selecting the "Options" or "Menu" button in the browser, and looking for the "Add to Home Screen" option. On some desktop browsers, right-click on the page and select "Install".