// tslint:disable:no-console
import * as Bluebird from "bluebird";
import * as Sequelize from "sequelize";

import * as PRODUCTS from "@/data/products.json";
import * as RANKS from "@/data/rank.json";
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
    const promises = Object.keys(this.models).map((key) => this.models[key].sync({ force: true }));
    await Bluebird.all(promises);
  }

  public async migrate() {
    const { Product, Rank } = this.models;
    const { data: productData } = PRODUCTS;
    const { data: rankData } = RANKS;
    const productPromises = productData.map((item) => Product.create(item));
    const rankPromises = rankData.map((item) => Rank.create(item));
    await Bluebird.all([...productPromises, ...rankPromises]);
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
