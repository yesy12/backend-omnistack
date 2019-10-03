const Spot = require("../models/Spot");
const User = require("../models/User");

//index listar todos os objetos
//show listar apenas um objeto
//destroy, update
//store criar objeto

module.exports = {
	async index(req,res){
		const { tech } = req.query;

		const spots = await Spot.find({
			techs : tech
		})

		return res.json(spots);

	},
	async store(req,res){
		const { filename } = req.file;
		const { company, price, techs } = req.body;
		const { user_id } = req.headers

		const user = await User.findById(user_id)

		if(!user){
			return res.status(400).json({
				error : "User does not exists"
			})
		}
		else{
			const spot = await Spot.create({
				thumbnail: filename,
				company,
				price,
				techs : techs.split(",").map(tech => tech.trim()),//tirar espaco antes e depois
				user: user_id
			})

			return res.json(spot)
			
		}
	}
}