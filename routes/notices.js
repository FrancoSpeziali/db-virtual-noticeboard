import express from "express";
import {
  getAllNotices,
  addNewNotice,
  clearAllNotices,
} from "../controllers/notices.js";

const router = express.Router();

// http://localhost:3001/notices/all
router.get("/all", getAllNotices);

// http://localhost:3001/notices/new
router.post("/new", addNewNotice);

// http://localhost:3001/notices/clear
router.delete("/clear", clearAllNotices);

export default router;
