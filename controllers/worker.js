

/*
* This processes the incomong model 
* Model and userProfile both present in req.
* This makes this api stateless, very important for scalability
*
*/
var process  = function(req,res){
	console.log("params",req.query)
    res.json({"a":"b"})
}

module.exports.process = process;