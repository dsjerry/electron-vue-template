import { app, BrowserWindow } from 'electron'
import { join } from 'path'

app.whenReady().then(() => {
  const preload = join(__dirname, '../preload/index.js')
  const win = new BrowserWindow({
    title: 'Main window',
    webPreferences: {
      preload
    }
  })

  win.webContents.openDevTools({mode: 'right'})

  // You can use `process.env.VITE_DEV_SERVER_URL` when the vite command is called `serve`
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    // Load your file
    win.loadFile('dist/index.html')
  }
})