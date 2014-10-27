var http = require('http')



function handle_incoming_request(req, res) {
	console.log("Incoming request: (" + req.method + ") " + req.url)
	res.writeHead(200, { "Content-Type" : "application/json" } )
	res.end(JSON.stringify({ error: null }) + "\n")
}




var server = http.createServer(handle_incoming_request)
server.listen(5000)

