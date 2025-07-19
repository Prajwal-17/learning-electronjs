const { contextBridge, ipcRenderer } = require('electron')

// for security reasons electron does not allow full nodejs acces to the renderer(browser) by default
// contextbridge is the way to expose data/fnc
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping')
})