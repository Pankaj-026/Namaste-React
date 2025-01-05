# React Parcel Starter Project

This project demonstrates setting up a React application using **Parcel** bundler. Follow the steps below to initialize and configure your project.

## Steps to Set Up the Project

### 1. Initialize npm in Your Repository

Run the following command to initialize npm and create a `package.json` file:
```bash
npm init -y
```

### 2. Install React and React DOM

Add React and ReactDOM to your project:
```bash
npm install react react-dom
```

### 3. Remove CDN Links

If your project is currently using React and ReactDOM via CDN, remove those `<script>` tags from your HTML file.

### 4. Install Parcel

Install Parcel as your bundler:
```bash
npm install parcel@next --save-dev
```

### 5. Update HTML File

In your `index.html` file, update the `<script>` tag to use the entry point for Parcel (usually your `index.js` file):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Parcel App</title>
</head>
<body>
  <div id="root"></div>
  <script src="index.js" type="module"></script>
</body>
</html>
```

### 6. Ignite Your App with Parcel

Use Parcel to serve your app during development:
```bash
npx parcel index.html
```
This will start a local development server and generate a `dist/` folder.

### 7. Add Scripts to package.json

Update your `package.json` with the following scripts:
```json
"scripts": {
  "start": "parcel",
  "build": "parcel build index.html"
}
```

### 8. Add `.gitignore` File

Create a `.gitignore` file in your project root and include:
```
node_modules/
dist/
.cache/
*.log
```

### 9. Add Browserlists

Add `browserlist` configuration to your `package.json`:
```json
"browserslist": [
  "> 0.5%",
  "last 2 versions",
  "not dead"
]
```

### 10. Build a Production Version

To build a production-ready version of your app, run:
```bash
npm run build
```
This will generate a production build in the `dist/` folder.

## Commands Summary

| Command          | Description                          |
|------------------|--------------------------------------|
| `npm init -y`    | Initialize npm                       |
| `npm install`    | Install dependencies                 |
| `npx parcel`     | Start development server             |
| `npm run build`  | Create production build              |

## Example `index.js`

Ensure you have an `index.js` file as the entry point for your app:
```javascript
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <h1>Hello, React with Parcel!</h1>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

## Folder Structure
```
my-app/
├── src/
│   ├── index.js
├── index.html
├── package.json
├── .gitignore
└── node_modules/
```

### Notes
- Ensure Parcel is installed as a development dependency (`--save-dev`).
- Browserlists help ensure your app supports modern browsers efficiently.
- Remove the `.cache/` and `dist/` folders before pushing code to avoid unnecessary files in version control.

Enjoy building your React app with Parcel!
