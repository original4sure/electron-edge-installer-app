const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const { exec } = require('child_process');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })
  win.webContents.openDevTools()
  ipcMain.handle('ping', () => 'pong')
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  
})

//create backend-app
// label-printer.exe
//uid-lable.exe
//deamon-client.exe

//create frontend-vue
//mark-console.exe
//label-printer.exe