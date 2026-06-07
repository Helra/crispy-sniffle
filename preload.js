const { contextBridge, ipcRenderer } = require('electron');
 
// Expose safe IPC methods to the renderer
contextBridge.exposeInMainWorld('electronAPI', {
  closeApp: () => ipcRenderer.send('close-app') // Send "close-app" message to main
});