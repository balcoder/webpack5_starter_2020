# webpack5_starter

This is a webpack 5 starter tool to get you up and running with a webapp quickly

## To Use for development

Clone the repository to your chosen folder and run

`npm run build` _builds the dist folder with all your files_
`npm run dev` _does same as build above but also runs the dev server and opens browser on port 3000 and tracks changes use this while developing_

## To use for production

Change the webpckconfig file section from mode: "development" to mode: "production" and now your dist folder will be made with production ready files.

## To add an svg and make sprite in bundle

import all the SVG's you need into your code and use them within an SVG tag with the SVG's id:

```
// *.js
import "/path/to/icons/logo.svg";
```

```
// *.html
<svg class="icon" aria-hidden="true">
  <use xlink:href="#logo"></use>
</svg>
```
