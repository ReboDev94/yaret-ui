## YaretUI

YaretUI is a components library built with React + TypeScript + TailwindCss

## Status

[![NPM Version](https://img.shields.io/npm/v/yaret-ui.svg)](https://www.npmjs.com/package/yaret-ui)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ReboDev94/yaret-ui/blob/main/LICENSE)
[![npm bundle size](https://badgen.net/bundlephobia/minzip/yaret-ui)](https://bundlephobia.com/package/yaret-ui@latest)
[![npm](https://img.shields.io/npm/dt/yaret-ui?label=installs)](https://www.npmjs.com/package/yaret-ui)

## Install

Install with npm or yarn

```bash
npm install yaret-ui
or
yarn add yaret-ui
```

## Quick Start

import component from yaret-ui

```js
import { Input, Button } from 'yaret-ui';

function App() {
  return (
    <div>
      <Input />
      <Button>Click</Button>
    </div>
  );
}
```

## Custom colors

1. create styles.css file

```css
:root {
    --yaret-ui-color-primary: 0 75 135;
    --yaret-ui-color-secondary: 124 82 149;
    --yaret-ui-color-success: 75 149 96;
    --yaret-ui-color-error: 224 79 57;
    --yaret-ui-color-warning: 244 195 0;
    --yaret-ui-color-info: 155 184 211;
    --yaret-ui-color-light: 227 232 241;
    --yaret-ui-color-dark: 39 54 59;
}
```

2. Import styles.css file in  main.tsx

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## Components

Visit [Storybook](https://yaret-ui.vercel.app) view all components
