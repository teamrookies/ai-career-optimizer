const express = require("express");
const router = express.Router();
const groq = require("../services/groq"); // your existing AI service

router.post("/start", async (req, res) => {
  const { interviewType } = req.body;

  const prompt = `
You are a professional interviewer.

Interview role: ${interviewType}

Rules:
- Ask ONE interview question
- Medium difficulty
- No explanation
- No answers
`;

  try {
    const question = await groq.chat(prompt);
    res.json({ question });
  } catch (err) {
    res.status(500).json({ error: "Interview start failed" });
  }
});

router.post("/answer", async (req, res) => {
  const { interviewType, question, answer } = req.body;

  const prompt = `
You are conducting a ${interviewType}.

Question: ${question}
Candidate Answer: ${answer}

Give:
1. Short feedback (2 lines)
2. Ask the next interview question
`;

  try {
    const response = await groq.chat(prompt);
    res.json({ response });
  } catch (err) {
    res.status(500).json({ error: "Answer processing failed" });
  }
});

router.post("/feedback", async (req, res) => {
  const { interviewType, answers } = req.body;

  const prompt = `
You are an interviewer for ${interviewType}.

Candidate answers:
${answers.join("\n\n")}

Give:
- Strengths
- Weaknesses
- Overall score /10
- Improvement tips
`;

  try {
    const feedback = await groq.chat(prompt);
    res.json({ feedback });
  } catch (err) {
    res.status(500).json({ error: "Feedback generation failed" });
  }
});

module.exports = router;
