const { app, BrowserWindow, ipcMain } = require("electron");
const url = require("url");
const path = require("path");

require("electron-reload")(__dirname);

let index;
let create;

app.on("ready", () => {
  // instantiate index window
  index = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  });

  // inject html into window
  index.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  // quit app when closed
  index.on("closed", () => {
    app.quit();
  });
});

function addVMWindow() {
  // instantiate create window
  create = new BrowserWindow({
    width: 400,
    height: 300,
    title: "Create new VM",
    webPreferences: {
      nodeIntegration: true
    }
  });

  // inject html into window
  create.loadURL(
    url.format({
      pathname: path.join(__dirname, "create.html"),
      protocol: "file:",
      slashes: true
    })
  );

  // Garbage collect
  create.on("close", () => {
    create = null;
  });
}

//exports.addVMWindow = () => addVMWindow();
module.exports = { addVMWindow };
