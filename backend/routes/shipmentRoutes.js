import express from "express";
import { getAllShipments, addShipment, updateShipment } from "../controllers/shipmentController.js";

const router = express.Router();

router.get("/", getAllShipments);
router.post("/", addShipment);
router.put("/:id", updateShipment);

export default router;
