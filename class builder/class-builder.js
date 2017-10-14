const params = require('./classParams');
const container = require('./container');
const component = require('./component');
const style = require('./style');
const index = require('./index');
const fs = require('fs');

const mainPath = params.className + '/' + params.className;

fs.mkdirSync(params.className);
fs.writeFileSync(mainPath + '.jsx', component(params.className));
fs.writeFileSync(mainPath + 'Container.jsx', container(params.className));
fs.writeFileSync(params.className + '/' + params.className + '.scss', style(params.className));
fs.writeFileSync(params.className + '/' +  'index.js', index(params.className));
