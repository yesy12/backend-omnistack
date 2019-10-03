const User = require("../models/User")
//index listar todos os objetos
//show listar apenas um objeto
//destroy, update
//store criar objeto

module.exports = {
	async store(req,res){
		const { email } = req.body;
		
		let user  = await User.findOne({
			email
		})
		if(!user){
			user = await User.create({
				email
			})
		}
		
		/**/
		return res.json(user)
		
	}
}