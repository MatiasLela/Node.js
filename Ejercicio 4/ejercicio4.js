const os=require('os');

console.log('Memoria Libre:'+os.freemem()+' bytes');
const vec=[];
for(let f=0;f<1000000;f++){
    vec.push(f);
}
console.log('Cantidad de espacio libre luego del vector: '+os.freemem);