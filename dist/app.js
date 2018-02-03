"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var url_1 = require("url");
var path_1 = require("path");
var window = null;
var createWindow = function () {
    window = new electron_1.BrowserWindow({
        width: 800,
        height: 640
    });
    window.loadURL(url_1.format({
        pathname: path_1.join(__dirname, 'web', 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    window.webContents.openDevTools();
    window.on('closed', function () {
        window = null;
    });
};
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', function () { return electron_1.app.quit(); });
