class Tester {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hello ${this.name}.`);
  }

  alertMe() {
    alert('blah!');
  }
}

export default Tester;
