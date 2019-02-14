import * as express from "express";

import getModels from "@/Database";

export default (router: express.Router): void => {
  router.get("/products", async (req: express.Request, res: express.Response) => {
    const { Product } = await getModels();
    const result = await Product.findAll({ order: [["id", "DESC"]] });
    res.json({ data: result });
  });
};
