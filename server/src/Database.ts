// tslint:disable:no-console
import * as Bluebird from "bluebird";
import * as Sequelize from "sequelize";

import createModels from "@/models";

const CONFIG = {
  dialect: "postgres",
  operatorsAliases: false,
  pool: {
    acquire: 30000,
    dile: 10000,
    max: 5,
    min: 0,
  },
};

class Database {
  public models: any;
  private db: any;

  constructor({ host, database, user, password }) {
    const config = { ...CONFIG, host };
    this.db = new Sequelize(database, user, password, config);
    this.models = createModels(this.db);
  }

  public async authenticate() {
    this.db.authenticate()
      .then(() => console.log("Connection has been established successfully."))
      .catch((err) => console.error("Unable to connect to the database:", err));
  }

  public async syncModels() {
    const promises = Object.keys(this.models).map((key) => this.models[key].sync());
    await Bluebird.all(promises);
  }
}

export default async () => {
  const {
    DB_HOST,
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
  } = process.env;
  const db = new Database({
    database: DB_NAME,
    host: DB_HOST,
    password: DB_PASSWORD,
    user: DB_USER,
  });
  await db.authenticate();
  await db.syncModels();
  await db.migrate();

  return db.models;
};
