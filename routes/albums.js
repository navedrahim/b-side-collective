import { Router } from "express";
import * as controllers from "../controllers/albums.js";
import restrict from "../helpers/restrict.js";

const router = Router();

router.get("/albums", controllers.getAlbums);
router.get("/albums/:id", controllers.getAlbum);
router.post("/albums", restrict, controllers.createAlbum);
router.put("/albums/:id", restrict, controllers.updateAlbum);
router.delete("/albums/:id", restrict, controllers.deleteAlbum);

export default router;
