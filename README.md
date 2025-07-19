# Electron JS

A framework used to build multi platform desktop apps using html, css, js.
- Electron bundles Chromium and Node js runtime to run html,css, js.
- Chromium - core web browser framework.
- Node js - javascript runtime environment
---
### Electron model
- `Main process` - Electron has a single main process. which is application `entry point`. This runs the nodejs environment and handle window management and also has access to user's operating system.
- `Renderer proces` - Each browser window has its own renderer process ,hence rendering all the web content
- `Preload` -  Configuration for the preload script (runs in the renderer, but has Node access).

---
### Preload Scripts
- A javascript script file runs which before the web page load. Can connect main process with renderer process. It has access to both DOM APIs and Node.js environment, and is often used to expose privileged APIs to the renderer via the `contextBridge` API.

```
+-----------------------+     IPC      +---------------------+
|    Main Process       | <=========>  |  Renderer Process    |
|  (Node.js + Electron) |              | (Chromium + UI code) |
+-----------------------+              +---------------------+
           ^                                     ^
           |           Preload Script            |
           +-------------------------------------+
           (Exposes secure APIs to the renderer)

```
![[Pasted image 20250719190458.png]]

---
### Installation 

1. Using npm package
> `npm install electron --save-dev`
2. Using [Electron-vite-too](https://electron-vite.org/guide/)  (recomended)
> `npm create @quick-start/electron@latest`

---
### Sandboxing, Scaffolding, Packaging, Battries included

- **Sandbox**
	- A sandbox is a restricted environment to run unsafe code , without harming the OS or other data.
	- Disables direct Node.js access in the renderer

 - **Scaffolding** - "Scaffolding" means generating the **initial project structure and boilerplate code** automatically.
 
- **Packaging** - Packaging means converting your app (HTML/JS/CSS + Electron backend) into an **installable desktop app** (e.g., `.exe`, `.dmg`, `.AppImage`). Like npm run build.

 - **Batteries included** means the tool provides **everything you need to get started** and build apps — without requiring extra configuration or tools.

---
### `electron.vite.config.ts`

```ts
import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react(), tailwindcss()]
  }
})
```

- `resolve`: Node.js utility to resolve file paths.
- `externalizeDepsPlugin`: Ensures native Node modules or large packages are not bundled (makes dev faster).
---