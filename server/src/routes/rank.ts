import * as express from "express";

import getModels from "@/Database";

export default (router: express.Router): void => {
  router.get("/ranks", async (req: express.Request, res: express.Response) => {
    const { Rank } = await getModels();
    const result = await Rank.findAll({ order: [["id", "DESC"]] });
    res.json({ data: result });
  });
};
