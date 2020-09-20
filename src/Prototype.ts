class Rectangle {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  print() {
    console.dir(this)
  }

  clone(): Rectangle {
    const newRectangle = new Rectangle(this.height, this.width);

    return Object.assign(newRectangle, this);
  }
}

const rectangle = new Rectangle(50, 50);
const newRectangle = rectangle.clone();

rectangle.print();
newRectangle.print();
