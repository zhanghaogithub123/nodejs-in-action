var http = require('http')
var fs = require('fs')
http.createServer(function(req, res){
    res.writeHeader(200, {'Content-Type':'image/png'});
    fs.createReadStream('./image.png').pipe(res);
}).listen(3000);
console.log('server running at http://localhost:3000')

