// Class declarations
class Human {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`My name is ${this.name}`);
  }
}

// Class expression
let HumanExpression = class {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`My name is ${this.name}`);
  }
};

class Programmer extends Human {
  // Private field
  #programmingLanguages = [];

  constructor(name, programmingLanguages) {
    super(name);
    this.#programmingLanguages = programmingLanguages;
  }

  static coding() {
    console.log(`Programming / Coding`);
  }

  // Implement get/set
  get languages() {
    return this.#programmingLanguages;
  }
}

class Demon extends Human {
    #forms = [];

    constructor(name, ...forms) {
        super(name)
        this.#forms = forms;
    }

    get demonForms() {
        return this.#forms;
    }
}

let james = new Human('James');
james.speak();

let marry = new Programmer('Marry', ['TypeScript', 'Java', 'Go']);
marry.speak();
console.log(marry.languages);

let demon = new Demon('Rattle', 'Baphomet', 'Zombie', 'Kraken');
console.log(demon.demonForms);