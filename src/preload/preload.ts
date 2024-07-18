import { contextBridge, ipcRenderer } from 'electron';

const WINDOW_API = {
    greet: () => {ipcRenderer.send('message', "Hello Main.")},
    test: (message:string) => {ipcRenderer.send('test', message)}
};

contextBridge.exposeInMainWorld('api', WINDOW_API);