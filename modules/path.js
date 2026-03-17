const path = require("path");

// Retorna o nome do arquivo atual
console.log(path.basename(__filename));

// Retorna o nome do diretório atual
console.log(path.dirname(__filename));

// Retorna a extensão do arquivo
console.log(path.extname(__filename));

// Cria um objeto Path
console.log(path.parse(__filename));

// Junta caminho de arquivos
console.log(path.join(__dirname, "test", "arquivo1.html"));
