const mongoose = require("mongoose");

const SpotSchema = mongoose.Schema({
	thumbnail : String,
	company : String,
	price : Number,
	techs : [Strings],
	user: {
		type : mongoose.Schema.Types.ObjectId,
		ref: "User"
	}
});

module.export = mongoose.model("Spot",SpotSchema)