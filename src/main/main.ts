import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

function createWindow() {

    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, '../preload/preload.js')
        },
    });

    ipcMain.on('message', (event, arg) => {
        console.log(arg);
    });

    ipcMain.on('test', (event, arg) => {
        console.log(arg);
    });

    mainWindow.loadURL('http://localhost:5173');
}

app.on('ready', createWindow);