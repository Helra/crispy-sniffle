const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');

let win ;

function createWindow() {
    win = new BrowserWindow({
        width: 214,
        height: 228,
        resizable: false,
        fullscreenable: false,
        frame: false,
        transparent: true,
        background: "#00000000",
        webPreferences: {
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    win.loadFile('index.html');

    win.on('closed', () => {
        win = null; // Dereference the window object
    });
}

app.whenReady().then(createWindow);

ipcMain.on('close-app', () => {
  if (win) {
    win.close(); // Close the main window
  }
});


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});