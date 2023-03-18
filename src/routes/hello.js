import express from "express";

const router = express.Router();

router.get("/hello", async (_req, res) => {
  return res.send("Welcome to ec2...");
});

router.post("/hello", async (req, res) => {
  return res.send(req.body);
});

export default router;