import { Router } from "express"
import * as controllers from "../controllers/albums.js"

const router = Router()

router.get("/albums", controllers.getAlbums)
router.get("/albums/:id", controllers.getAlbum)
router.post("/albums", controllers.createAlbum)
router.put("/albums/:id", controllers.updateAlbum)
router.delete("/albums/:id", controllers.deleteAlbum)

export default router