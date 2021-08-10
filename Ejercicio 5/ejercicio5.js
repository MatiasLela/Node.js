const fs=require('fs');

fs.writeFile('./archivo1.txt','Linea 1\nLinea 2', error=>{
    if(error)
        console.log(error);
    else
        console.log('El archivo fue creado');
});
console.log('Ultima linea del programa');