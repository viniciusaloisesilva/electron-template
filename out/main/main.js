"use strict";
const electron = require("electron");
const path = require("path");
function createWindow() {
  let mainWindow = new electron.BrowserWindow({
    width: 600,
    height: 700,
    resizable: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "../preload/preload.js")
    }
  });
  electron.ipcMain.handle("get/Directory", async (event, args) => {
    const result = await electron.dialog.showOpenDialog(mainWindow, {
      properties: ["openDirectory"],
      title: "Selecione a pasta de destino"
    });
    return result.filePaths;
  });
  mainWindow.loadURL("http://localhost:5173");
  mainWindow.webContents.openDevTools({ mode: "detach" });
}
electron.app.on("ready", createWindow);
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
electron.app.on("activate", () => {
  if (electron.BrowserWindow === null) {
    createWindow();
  }
});
