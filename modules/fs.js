const { error } = require("console");
const fs = require("fs");
const path = require("path");

// Criar uma pasta
// fs.mkdir(path.join(__dirname, "/pasta1"), (error) => {
// 	if (error) {
// 		return console.log("Erro:", error);
// 	}

// 	console.log("Pasta criada com sucesso!");
// });

// Criar um arquivo
fs.writeFile(path.join(__dirname, "/pasta1", "arquivo.txt"), "Hello World", (error) => {
	if (error) {
		return console.log("Erro:", error);
	}
	console.log("Arquivo criado com sucesso!");
	// Adiciona um conteúdo a o arquivo
	fs.appendFile(path.join(__dirname, "/pasta1", "arquivo.txt"), "Hello Node!", (error) => {
		if (error) {
			return console.log("Erro:", error);
		}
		console.log("Conteúdo adicionado com sucesso!");
		// Ler um arquivo
		fs.readFile(path.join(__dirname, "/pasta1", "arquivo.txt"), "utf8", (error, data) => {
			if (error) {
				return console.log("Erro:", error);
			}
			console.log(data);
		});
	});
});

// Continuação da vídeo-aula -> 44:35
