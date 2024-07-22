"use strict";
const electron = require("electron");
const directoryApi = {
  requestDirectory: () => electron.ipcRenderer.invoke("get/Directory")
};
electron.contextBridge.exposeInMainWorld("directoryApi", directoryApi);
