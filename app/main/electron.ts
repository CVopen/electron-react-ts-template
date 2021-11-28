// 主进程
import { app, BrowserWindow } from 'electron'
import isDev from 'electron-is-dev'
import {resolve, join} from 'path'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  if(isDev){
    const urlLocation = 'http://localhost:3000'
    mainWindow.loadURL(urlLocation)
    console.log('tesdfassssdfdft')
    // Open the DevTools.
    mainWindow.webContents.openDevTools()
  }else{
    mainWindow.loadURL(`file://${join(__dirname, '../dist/index.html')}`)
  }

  // require('@electron/remote/main').initialize() // 初始化
  // require('@electron/remote/main').enable(mainWindow.webContents)

}

app.on('ready', () => {
  console.log('xxssssssddsdf')
})

app.whenReady().then(() => {
  createWindow()
  console.log('whenReady 123234sdds')

  app.on('activate', function () {
    console.log('activate')
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
