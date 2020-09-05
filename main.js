const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Crea la finestra del browser
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)