
if (typeof localStorage === "undefined" || localStorage === null) {
  const LocalStorage = require('node-localstorage').LocalStorage;   
  localStorage = new LocalStorage('./storage-data');
}
 module.exports = localStorage