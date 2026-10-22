# Tam's Portfolio Repo

## Instructions

### Content gutters

Content sections share `--content-width: min(90%, 1280px)` from
`src/styles/globals.scss`. Use the `content-container` Sass mixin for standalone
wrappers; case-study sections use the same width for their grid track. Nested
content fills that track instead of adding another percentage-based gutter.
Hero backgrounds remain full bleed, and desktop phone frames retain their size
limits. Resume print styles use the printable page width independently.
Desktop navigation uses the full width with a small inner inset. At 1024px and
above, the work and Brands & tools grids and case-study media sections span the
viewport with 2rem side gutters. Desktop case-study collages are full bleed;
mobile-device rows and browser-window previews are centered, capped at 1920px,
and retain at least 2rem side gutters.
Case-study descriptions and navigation, About,
and Connect retain the shared content gutters.

### Adobe product artwork

The Brands & tools section uses product SVGs from
[Devicon](https://github.com/devicons/devicon) (Photoshop, Illustrator, XD) and
[SVGL](https://github.com/pheralb/svgl) (Premiere Pro, After Effects, Lightroom).
The SVG colors are adapted to white lettering and outlines for the dark layout.
Their MIT license notices are included alongside the assets as
`adobe-devicon-LICENSE.txt` and `adobe-svgl-LICENSE.txt`. Adobe product names and
logos remain the property of their respective owners.

### Node.js and Netlify

Use the latest Node.js 26.x release for local development and deployments.
Node.js 26 is the Current release line; Node.js 24 is the LTS alternative.

```bash
nvm install
nvm use
```

The version is configured in `.nvmrc`, `netlify.toml`, and the GitHub Actions
workflows. In Netlify, also select Node.js 26 (if available) under **Project configuration >
Developer settings > Continuous deployment > Dependency management**. Remove or
update any older `NODE_VERSION` environment-variable overrides. The
`NODE_VERSION = "26"` setting in `netlify.toml` selects Node 26 for Netlify builds.

After merging these settings into `master`, push a new `v*` tag to build a new
draft deploy, then publish it manually. Republishing an existing deploy does not
rebuild it with the new Node.js version.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
