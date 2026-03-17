class Person {
	constructor(name) {
		this.name = name;
	}

	sayMyName() {
		return `Esse filho de Deus se chama ${this.name}!`;
	}
}

module.exports = {
	Person,
};
