class ColorGenerator {
  generateColor(): string {
    return 'white';
  }
}

class HexGenerator {
  random(): string {
    return Math.floor(Math.random() * 16777215).toString(16);
  }
}

class HexColorAdapter extends ColorGenerator {
  hexGenerator: HexGenerator;

  constructor(hexGenerator: HexGenerator) {
    super();
    this.hexGenerator = hexGenerator;
  }

  generateColor(): string {
    return `#${this.hexGenerator.random()}`;
  }
}

class Client {
  generator: ColorGenerator;

  constructor(generator: ColorGenerator) {
    this.generator = generator;
  }

  printColor() {
    console.log(this.generator.generateColor());
  }
}

const hexGenerator = new HexGenerator();
const hexColorGenerator = new HexColorAdapter(hexGenerator);
const client = new Client(hexColorGenerator);

client.printColor();
