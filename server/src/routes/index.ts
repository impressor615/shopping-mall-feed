import * as express from "express";
import * as fs from "fs";

export default (router: express.Router): express.Router => {
  const routes = fs.readdirSync(__dirname);
  routes.forEach((route) => {
    if (route === "index.ts") {
      return;
    }

    if (!/.ts$/.test(route)) {
      return;
    }

    require(`./${route}`).default(router);
    return;
  });

  return router;
};
