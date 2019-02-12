import * as fs from "fs";
import * as path from "path";
import * as Sequelize from "sequelize";

export default (db) => {
  const models = {};
  const modelFiles = fs.readdirSync(__dirname);
  modelFiles.forEach((file) => {
    if (file === "index.ts") {
      return;
    }

    if (!/.ts$/.test(file)) {
      return;
    }

    const model = require(`./${file}`).default(db, Sequelize);
    const { name } = path.parse(file);
    const capitalName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
    models[capitalName] = model;
  });

  return models;
};
