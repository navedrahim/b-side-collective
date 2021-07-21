import { Router } from "express";
import * as controllers from "../controllers/albums.js";
import restrict from "../helpers/restrict.js";

const router = Router();
// don't forget to add restrict
router.get("/albums", controllers.getAlbums);
router.get("/albums/:id", controllers.getAlbum);
router.post("/albums", restrict, controllers.createAlbum);
router.put("/albums/:id", restrict, controllers.updateAlbum);
router.delete("/albums/:id",  controllers.deleteAlbum);

export default router;
