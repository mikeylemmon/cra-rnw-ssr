# create-react-app + SSR + react-native-web

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/mikeylemmon/cra-rnw-ssr/blob/main/src/index.tsx)

This repo is part of
[an investigation](https://github.com/remix-run/remix/discussions/1578#discussioncomment-3777340)
into hydration errors encountered using react-native-web in Remix.

Starting from a create-react-app typescript template, the app was modified to
use React to render the entire document instead of just a #root div. Then, an
[express SSR server](./server) was added, roughly based on
[this blog post](https://medium.com/bucharestjs/upgrading-a-create-react-app-project-to-a-ssr-code-splitting-setup-9da57df2040a)
by Andrei Duca. Finally, react-native-web was integrated with stylesheet
injection by following
[tyrauber's approach](https://github.com/tyrauber/remix-expo/tree/main/apps/remix/app).

The hydration errors encountered when integrating RNW with Remix are not
arising here. It is interesting to note, however, that when hydration is
bypassed by using `createRoot` instead of `hydrateRoot` on the client, the
server/client css discrepancies observed in
https://github.com/mikeylemmon/remix-rnw/tree/horus-styles are visible
(though without the hydration error of course, as createRoot makes no
attempt at hydration).

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
