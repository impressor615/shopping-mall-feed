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
  public static db: any;
  public static initializeIfNeeded(options) {
    if (Database.db) {
      return Database.db;
    }

    Database.db = new Database(options);
    return Database.db;
  }

  public models: any;
  private isSynced: boolean;
  private isMigrated: boolean;
  constructor({ host, database, user, password }) {
    const config = { ...CONFIG, host };
    Database.db = new Sequelize(database, user, password, config);
    this.models = createModels(Database.db);
  }

  public async syncModels() {
    if (this.isSynced) return;
    const promises = Object.keys(this.models).map((key) => this.models[key].sync({ force: true }));
    await Bluebird.all(promises);
    this.isSynced = true;
  }

  public async migrate() {
    if (this.isMigrated) return;
    const { Product, Rank } = this.models;
    const { data: productData } = PRODUCTS;
    const { data: rankData } = RANKS;
    const productPromises = productData.map((item) => Product.create(item));
    const rankPromises = rankData.map((item) => Rank.create(item));
    await Bluebird.all([...productPromises, ...rankPromises]);
    this.isMigrated = true;
  }
}

export default async () => {
  const {
    DB_HOST,
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
  } = process.env;
  const db = Database.initializeIfNeeded({
    database: DB_NAME,
    host: DB_HOST,
    password: DB_PASSWORD,
    user: DB_USER,
  });
  await db.syncModels();
  await db.migrate();

  return db.models;
};
