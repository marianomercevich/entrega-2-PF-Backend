import { Router } from "express";
import { MongoDBProductManager } from "../dao/mongo-manager/productmanager.js";

const router = Router();
const managerDB = new MongoDBProductManager();

router.get("/:cid", async (request, response) => {
  const result = await managerDB.limitHandler(request, response);
  response.render("products", result);
});

export default router;