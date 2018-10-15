var http = require('http');
var fun = require('./function');


function onRequest(request, response) {
   response.writeHead(200, {'Content-Type': 'text/html' });  //'text/plain'  text/html

    
    
    
    fun.random(min,max);
    
    
    //fun.minIntegerFromArray(array);
    
    
    fun.minIntegerFromString(string);
    
    
    fun.concatStringsByLength(arrayOfStrings, type);
    
    
    
    response.end();
    
}

http.createServer(onRequest).listen(3000);