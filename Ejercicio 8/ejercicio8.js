const http=require('http');
const url=require('url');

const servidor=http.createServer((pedido,respuesta)=>{
    const objetourl = url.parse(pedido.url);
    console.log('Camino completo del recurso y parametros:'+objetourl.path);
    console.log('Solo el camino y nombre del recurso: '+objetourl.pathname);
    console.log('Parametros del recurso:'+objetourl.query);
    respuesta.writeHead(200,{'Content-Type':'text/html'});
    respuesta.write('<!doctype html><html><head></head><body><h1>Hola mundo</h1></body></html>');
    respuesta.end();
})
servidor.listen(8888);

console.log('Servidor web iniciado');