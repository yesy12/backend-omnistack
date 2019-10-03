const Spot = require("../models/Spot")
//index listar todos os objetos
//show listar apenas um objeto
//destroy, update
//store criar objeto

module.exports = {
	async store(req,res){
		console.log(req.body);
		console.log("File: ")
		console.log(req.file)
		return res.json({
			ok : true
		})
	}
}