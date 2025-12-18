const express = require("express");
const askGroq = require("../services/groq");

const router = express.Router();

// Start interview: generate first question
router.post("/start", async (req, res) => {
  const { role, skills, difficulty } = req.body;

  const prompt = `
You are an interview AI.
Role: ${role}
Skills: ${skills}
Difficulty: ${difficulty}

Ask ONE interview question only.
Do not give answers.
`;

  try {
    const question = await askGroq(prompt);
    res.json({ question });
  } catch (error) {
    res.status(500).json({
      error: "Interview start failed",
      details: error.response?.data || error.message
    });
  }
});

// Evaluate answer and ask next question
router.post("/answer", async (req, res) => {
  const { role, question, answer } = req.body;

  const prompt = `
You are an interview evaluator.

Role: ${role}
Question: ${question}
Candidate Answer: ${answer}

Tasks:
1. Give brief feedback
2. Give score out of 10
3. Ask NEXT interview question (one only)

Format:
Feedback:
Score:
Next Question:
`;

  try {
    const evaluation = await askGroq(prompt);
    res.json({ evaluation });
  } catch (error) {
    res.status(500).json({
      error: "Answer evaluation failed",
      details: error.response?.data || error.message
    });
  }
});

module.exports = router;
