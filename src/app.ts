import { app, BrowserWindow } from 'electron';
import { format } from 'url';
import { join } from 'path';

let window: BrowserWindow = null;

const createWindow = () => {
  window = new BrowserWindow({
    width: 800,
    height: 640
  });

  window.loadURL(
    format({
      pathname: join(__dirname, 'web', 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  );

  window.on('closed', () => {
    window = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => app.quit());
