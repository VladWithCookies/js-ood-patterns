class EmailIterator {
  private collection: EmailList;
  private index: number = 0;

  constructor(collection: EmailList) {
    this.collection = collection;
  }

  get current(): string {
    return this.collection.items[this.index];
  }

  get hasMore(): boolean {
    return this.index < this.collection.items.length;
  }

  next() {
    this.index += 1;
  }
}

class EmailList {
  items: string[] = [];

  get iterator(): EmailIterator {
    return new EmailIterator(this);
  }

  addItem(item: string) {
    this.items.push(item);
  }
}

const emails = new EmailList();
const iterator = emails.iterator;

emails.addItem('customer@example.com');
emails.addItem('random@example.com');

while (iterator.hasMore) {
  console.log(`Sending spam to ${iterator.current}...`);
  iterator.next();
}
