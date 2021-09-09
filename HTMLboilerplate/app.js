const process = require('process');
const fs = require('fs');
const path = require('path');
const pageContent = require('./content');

const projectFileName = process.argv[2] || 'DemoProject';

const rootFolderName = path.join(__dirname, projectFileName);

createFolder('root');
createFolder('js');
createFolder('css');
createFiles('index', 'html');
createFiles('main.styles', 'css');
createFiles('main.script', 'js');

function createFolder(folderType){
    let folderName = '';
    
    if(folderType === 'root'){
        folderName = rootFolderName;
    }else if(folderType === 'js'){
        folderName = path.join(rootFolderName,'js');
    }else if(folderType == 'css'){
        folderName = path.join(rootFolderName, 'css');
    }else{
        folderName = path.join(rootFolderName+'others');
    }
    try {
        fs.mkdirSync(folderName, true);
        console.log(`${folderType} - Directory created successfully!`);
    }catch(err) {
       console.error(err);
    }
}

function createFiles(fileName, fileType){
    let fileContent = '';
    if(fileType === 'html'){
        fileName = path.join(rootFolderName, fileName+'.html');
        fileContent = pageContent.htmlContent;
    }
    else if(fileType === 'js'){
        fileName = path.join(rootFolderName, 'js', fileName+'.js');
        fileContent = pageContent.jsContent;
    }
    else if(fileType === 'css'){
        fileName = path.join(rootFolderName, 'css', fileName+'.css');
        fileContent = pageContent.cssContent;
    }
    else{
        fileName = path.join(rootFolderName, 'others', fileName+'.txt');        
    }
    try {
        fs.writeFileSync(fileName, fileContent);
        console.log(`${fileName} - file created successfully!`);
    }catch(err) {
       console.error(err);
    }
}
