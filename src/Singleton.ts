class Database {
  private static instance = null;

  private constructor() {
    console.log('Creating database connection...')
  }

  static getInstance() {
    if (Database.instance === null) {
      this.instance = new Database();
    }

    return this.instance;
  }
}

Database.getInstance();
Database.getInstance();
