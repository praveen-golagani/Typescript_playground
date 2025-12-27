//import fs
import * as fs from 'fs';

//read a text file
fs.readFile('./EnumReadFile/example.txt','utf8',(err,data)=>{
    if(err){
        console.log('Error reading file: ',err.message);
        return;
    }
    console.log('File content : ');
    console.log(data);
    
});
