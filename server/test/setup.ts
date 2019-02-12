import * as chai from "chai";
import chaiHttp = require("chai-http");
import * as dotenv from "dotenv";

import App from "@/App";

dotenv.config();
chai.should();
chai.use(chaiHttp);
(global as any).app = new App().app;
