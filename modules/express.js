const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use((req, res, next) => {
	console.log(`Request type: ${req.method}`);
	console.log(`Content type: ${req.headers["content-type"]}`);
	console.log(`Data: ${new Date()}`);

	next();
});

app.get("/views/users", async (req, res) => {
	const users = await UserModel.find({});
	res.render("view", { users });
});

// Busca de todos os usuários
app.get("/users", async (req, res) => {
	try {
		const users = await UserModel.find({});
		res.status(201).json(users);
	} catch (error) {
		res.status(500).send(error.message);
	}
});

// Busca de usuários por ID
app.get("/users/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const user = await UserModel.findById(id);
		res.status(201).json(user);
	} catch (error) {
		res.status(500).send(error.message);
	}
});

// Criação de usuários
app.post("/users", async (req, res) => {
	try {
		const user = await UserModel.create(req.body);

		res.status(200).json(user);
	} catch (error) {
		res.status(500).send(error.message);
	}
});

// Atualização de usuários por ID
app.patch("/users/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const user = await UserModel.findByIdAndUpdate(id, req.body, { returnDocument: "after" });
		res.status(201).json(user);
	} catch (error) {
		res.status(500).send(error.message);
	}
});

// Deleção de usuários por ID
app.delete("/users/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const user = await UserModel.findByIdAndDelete(id);
		res.status(200).json(user);
	} catch (error) {
		res.status(500).send(error.message);
	}
});
const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));
