import { Router } from "express";
import albumsRoutes from "./albums.js";
import usersRoutes from "./users.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the API root!"));

router.use("/", usersRoutes);
router.use("/", albumsRoutes);

export default router;
