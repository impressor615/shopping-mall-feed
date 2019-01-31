import * as chai from "chai";
import chaiHttp = require("chai-http");

import App from "@/App";

chai.should();
chai.use(chaiHttp);
(global as any).app = new App().app;
