exports.r404= function(req,res){
	//res.write("Error 404");
	res.status(404).send("hola");
};