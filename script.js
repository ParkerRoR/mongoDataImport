#! /usr/bin/env node
const { exec } = require('child_process');
const path = require("path");
const fs = require('fs');


const filesPath = '/home/parker/Downloads/site-dev' // Path onde estarão os arquivos .bson.gz
const dbName = 'site-dev' //Nome do DB


fs.readdir(filesPath, (err, files) => {

    files.map((file,i) => {
        if(file.match('bson')){
        
            exec(`mongorestore --gzip --db ${dbName} ${filesPath}/${file}`, (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                }
                console.log("Importado com sucesso!")
            }); //end exec

            console.log(`${file} importado (${i}/${files.length})`)

        } //end if

    }) // end map

}) //end readdir

