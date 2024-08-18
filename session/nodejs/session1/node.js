
// Globals:
//1) __dirname: Used to check the current directory address
//      console.log(__dirname);
//2) __filename: Used to check address of current file
//      console.log(__filename);
//3) exports:
//4) require:
//5) module:
//Types of module:
//1)Native: provided by Node.Js. 2)Custom: made by own. 3)NPM:module published online
//modules: using native modules
const os = require(`node:os`);//native module
const {hostname} = require(`node:os`);//destructuring method
console.log(os.hostname());
console.log(hostname());