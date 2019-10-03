//index listar todos os objetos
//show listar apenas um objeto
//destroy, update
//store criar objeto

module.exports = {
	store(req,res){
		return res.json({
			message : "hello world"
		})
	}
}