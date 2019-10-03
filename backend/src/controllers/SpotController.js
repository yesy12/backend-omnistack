const Spot = require("../models/Spot")

//index listar todos os objetos
//show listar apenas um objeto
//destroy, update
//store criar objeto

module.exports = {
	async store(req,res){
		const { filename } = req.file;
		const { company, price, techs } = req.body;
		const { user_id } = req.headers;//req.headers mas da erro
		
		let spotJson = {
			thumbnail: filename,
			company,
			price,
			techs : techs.split(",").map(tech => tech.trim()),
			user: user_id
		}

		Spot.create(spotJson)
		.then(()=>{
			return res.json(spotJson)
		})
		.catch((error)=>{
			return res.json(error)
		})
		
	}
}