const mongoose = require("mongoose");

const connectToDatabase = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cursonodejs.qym4v8d.mongodb.net/?appName=CursoNodejs`,
		);

		console.log("Conexão com o banco de dados realizada com sucesso!");
	} catch (error) {
		console.log("Ocorreu um erro ao se conectar com o banco de dados: ", error);
	}
};
module.exports = connectToDatabase;
