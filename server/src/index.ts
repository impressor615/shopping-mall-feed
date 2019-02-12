// tslint:disable:no-console
import * as dotenv from "dotenv";
import "source-map-support/register";

import App from "./App";
import setupDatabase from "./Database";

dotenv.config();
const PORT: number = Number(process.env.PORT) || 3000;
const app = new App().app;

(async () => {
  await setupDatabase();
  app
    .listen(PORT, () => console.log(`Express server listening at ${PORT}`))
    .on("error", (err) => console.error(err));
})();
