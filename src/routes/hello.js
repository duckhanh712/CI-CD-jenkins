import express from "express";

const router = express.Router();

router.get("/hello", async (_req, res) => {
  return res.send("Welcome to ec2...");
});

router.post("/hello", async (req, res) => {
  return res.send(req.body);
});

router.get("/profile/:id", async (req, res) => {
  const {id} = req.params

  const user = {
    id, 
    author: "Khuat Duc Khanh",
    description: 'Jenkins CI/CD',
    github: 'duckhanh712'
  }

  return res.send(user);
});

router.get("/loan/:id", async (req, res) => {
  const {id} = req.params

  const user = {
    id, 
    author: "Dinh Bich Loan",
    description: 'Jenkins CI/CD',
    github: 'duckhanh712'
  }

  return res.send(user);
});

export default router;