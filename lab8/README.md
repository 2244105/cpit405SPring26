# Lab 8 — React Link Shrinker

CPIT-405 (Internet Applications) — King Abdulaziz University
Student: Rami Jameel Alieli — 2244105

## Features
- **URL Shortening** — paste a long URL and get a short link.
- **Custom short URLs** — type your own short code, or leave it blank to get a random one.
- **About us page** — navigated to via React Router.

## React concepts demonstrated
- `useState` hook for managing inputs and the generated short URL.
- `onClick` / `onChange` event listeners for user interactions.
- React Router (`BrowserRouter`, `Routes`, `Route`, `Link`) for navigation.

## How to upload to CodeSandbox

### Option 1 — Drag & drop the folder
1. Go to https://codesandbox.io
2. Click **Create** → **Import Project**
3. Drag this entire `lab8` folder into the upload box
4. Once it boots, click **Share** and copy the public link

### Option 2 — Manual creation
1. Go to https://codesandbox.io and click **Create** → choose **React** template
2. Replace `src/App.js` and `src/index.js` with the files from this folder
3. Add the `src/pages/Home.js` and `src/pages/About.js` files
4. Replace `src/styles.css`
5. Open the **Dependencies** panel on the left and add `react-router-dom` (version 6.x)
6. Make sure the sandbox is set to **Public**, then **Share** → copy link

## Run locally (optional)
```
npm install
npm start
```
