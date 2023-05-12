# webpack5_starter

This is a webpack 5 starter tool to get you up and running with a webapp quickly

## To Use for development

Clone the repository to your chosen folder and run

`npm install` _installs dev dependencies_

`npm run dev` _does same as build below but also runs the dev server and opens browser on port 3000 and tracks changes use this while developing_

`npm run build` _builds the dist folder with all your files. make sure to change mode to production (as per below) in the webpack.config file if you want to compress all images and compress all html js and css for production ready code_

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

## To add images

```
// *.js
import "./styles/main.scss";
import hotel1 from "./assets/img/hotel-1.jpg";

const hotel1Img = document.getElementById("hotel-1");
hotel1Img.src = hotel1;

```

To compress just run `npm run build` and change the webpckconfig file section from mode: "development" to mode: "production" and now your dist folder will be made with production ready files.
