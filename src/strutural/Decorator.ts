interface Input {
  value: string;
}

class TextInput implements Input {
  value: string;

  constructor(value: string) {
    this.value = value;
  }
}

class TextInputDecorator implements Input {
  protected input: Input;

  constructor(input: Input) {
    this.input = input;
  }

  get value(): string {
    return this.input.value;
  }
}

class CardNumberInputDecorator extends TextInputDecorator {
  get value(): string {
    const { value } = this.input;

    return value.slice(-4).padStart(value.length, '*');
  }
}

const textInput = new TextInput('4242424242424242');
const cardNumberInput = new CardNumberInputDecorator(textInput);

console.log(cardNumberInput.value);
