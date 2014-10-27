var http = require('http')


function request_handler(req, res) {
	var body = 

}



var s = http.createServer(function(request, response){
	console.log("i got a request\n")
	response.end("Here is Pablo, playing with node\n")
})

s.listen(5000)