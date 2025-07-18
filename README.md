# Electron JS

A framework used to build multi platform desktop apps using html, css, js.

- Electron bundles Chromium and Node js runtime to run html,css, js.
- Chromium - core web browser framework.
- Node js - javascript runtime environment
---

### Electron model

- `Main process` - Electron has a single main process. which is application entry point. This runs the nodejs environment and handle window management and also has access to user's operating system.

- `Renderer proces` - Each browser window has its own renderer process ,hence rendering all the web content  
---
### Preload Scripts 

A javascript script file runs which before the web page load. Can connect main process with renderer process. 
