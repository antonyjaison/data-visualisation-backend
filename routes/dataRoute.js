import express from "express";
import { dataMaker } from "../controller/dataController.js";

const router = express.Router();

router.get("/", dataMaker);

export default router;
