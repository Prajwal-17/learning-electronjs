const { app, BrowserWindow, ipcMain, webContents } = require('electron')
const path = require("node:path")

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {   // add preload.js file 
      preload: path.join(__dirname, "preload.js")
    }
  })

  // Load a remote URL - only the last url will be rendered
  mainWindow.loadFile('index.html')
  // win.loadURL('https://github.com')
  mainWindow.webContents.openDevTools(); // open devtools on window creation
  console.log(webContents.getAllWebContents());
}

app.whenReady().then(() => {
  ipcMain.handle("ping", () => "pong")
  createWindow()
});

// event emitted before quitting app
app.on("before-quit", () => {
  console.log("quitting")
})

ipcMain.on("hello-main", (event, arg) => {
  console.log("arg", arg)
  console.log("event", event)
})

// close all windows before closing the app
// https://www.electronjs.org/docs/latest/api/app#event-window-all-closed
// On macOS, we do not quit the app automatically when all windows are closed.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {  // in win & linux closes the whole app
    app.quit();
  }
});

// event emitted when application is activated
app.on("activate", () => {
  if (mainWindow == null) {
    createWindow()
  }
})