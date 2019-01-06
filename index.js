const { app, BrowserWindow } = require('electron')

let win;

function createWindow () {
    win = new BrowserWindow({
        width: 1280,
        height: 900
    })


    win.loadURL(`http://kkutu.kr/kkutu`)


    win.on('closed', function () {
        win = null
    })
}


app.on('ready', createWindow)
console.log('Connected to JJO Server!')
