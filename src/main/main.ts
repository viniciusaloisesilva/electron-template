import { app, BrowserWindow, dialog, ipcMain } from 'electron';
import path from 'path';

function createWindow() {

    let mainWindow = new BrowserWindow({
        width: 600,
        height: 700,
        resizable: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, '../preload/preload.js'),
        },
    });

    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools({ mode: 'detach' });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
  
app.on('activate', () => {
  if (BrowserWindow === null) {
    createWindow();
  }
});