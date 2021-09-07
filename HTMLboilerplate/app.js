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
        folderName = rootFolderName+'/js';
    }else if(folderType == 'css'){
        folderName = rootFolderName+'/css';
    }else{
        folderName = rootFolderName+'/others';
    }

    fs.mkdir(folderName, (err) => {
        if (err) 
            return console.error(err);
        console.log(`${folderName} - Directory created successfully!`);
    });   
}

function createFiles(fileName, fileType){
    let fileContent = '';
    if(fileType === 'html'){
        fileName = rootFolderName+'/'+fileName+'.html';
        fileContent = pageContent.htmlContent;
    }
    else if(fileType === 'js'){
        fileName = rootFolderName+'/js/'+fileName+'.js';
        fileContent = pageContent.jsContent;
    }
    else if(fileType === 'css'){
        fileName = rootFolderName+'/css/'+fileName+'.css';
        fileContent = pageContent.cssContent;
    }
    else{
        fileName = rootFolderName+'/others/'+fileName+'.txt';        
    }

    fs.writeFile(fileName, fileContent, (err) =>{
        if (err)
         return console.log(err);

        console.log(`${fileName} - file created successfully!`);
    });
}
