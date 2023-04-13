'use strict';
const { app, BrowserWindow } = require('electron')
const path=require('path')
/*function printit(){
  const mmap = require("mmap-io");
  console.log(mmap)
  const fs = require("fs");
  console.log(Object.keys(mmap));
  var someFile, fd, fdW, size, rxProt, priv, buffer, buffer2, wBuffer, coreStats;
  someFile = "./main.js";
  
  fd = fs.openSync(someFile, "r");
  size = fs.fstatSync(fd).size;
  console.log('size',size)
  rxProt = mmap.PROT_READ ;
  priv = mmap.MAP_SHARED;
  buffer = mmap.map(size, rxProt, priv, fd);
  console.log(buffer.toString())
  return buffer
   
}*/
function createWindow () {
    const preload=path.join(app.getAppPath(), 'preload.js')
    app.allowRendererProcessReuse=false
    console.log('preload',preload)
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        //preload: path.join(__dirname, 'preload.js')
        preload,
        allowRendererProcessReuse:false
      }
    })
  
    win.loadFile('index.html')
    //process.buffer=printit()
  }
  
  app.whenReady().then(createWindow)
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })