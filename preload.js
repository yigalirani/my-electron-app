console.log('hello from preload')
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
//console.log(buffer.toString())
window.buffer=buffer