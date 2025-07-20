- So electron uses chomium(frontend UI) and nodeJS (as a backend) for a fully functional app.
- Since NodeJS has access to operating system, and lower level api os apis, it is a security risk to give a direct access or connection to the renderer. 
- So the recent updates was to remove the direct access to nodejs from the renderer and introduce **IPC(Inter Process Communication)**
	- `ipcMain` - module present in the main process to handle emit & receive events containing messages from the renderer process.
	- `ipcRenderer` - module present in renderer process to handle emit & receive events containing messages from the main process.
- This concept can be related to `Socket.io` but both are different.
---
### contextBridge
- Creates a safe, bi-directional, synchronous bridge across isolated contexts
- To use the contextBridge enable `contextIsolation` and disable `nodeIntegration`
```ts
// main.js (main process)
let mainWindow;

const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {   // add preload.js file 
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true
    }
  })
```
