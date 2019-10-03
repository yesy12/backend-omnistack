const Spot = require("../models/Spot")
//index listar todos os objetos
//show listar apenas um objeto
//destroy, update
//store criar objeto

module.exports = {
	async store(req,res){
		return res.json({
			ok : true
		})
	}
}