#!/usr/bin/env node

const fs = require('fs');

const generateHTML = require('./generateHTML.js');

const generateFileName = defaultFileName => {
  if(fs.existsSync(`${defaultFileName}.html`)){
    let i=1;
    defaultFileName = `${defaultFileName}(${i})`;
    while(fs.existsSync(`${defaultFileName}.html`)){
      const prevPrefix = `(${i})`;
      i++;
      defaultFileName = `${defaultFileName.substring(0, defaultFileName.length - prevPrefix.length)}(${i})`;
    }
  }
  return defaultFileName;
}

const defaultFileName = 'index';
const fileName = generateFileName(defaultFileName);

const HTML = generateHTML(process.argv);

fs.writeFile(`${fileName}.html`, HTML, err => { if (err) throw err });
