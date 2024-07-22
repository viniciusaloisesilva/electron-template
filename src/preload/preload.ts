import { contextBridge, ipcRenderer } from 'electron';

const directoryApi = {
    requestDirectory: () => ipcRenderer.invoke('get/Directory'),
};

contextBridge.exposeInMainWorld('directoryApi', directoryApi);