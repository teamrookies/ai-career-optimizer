const express = require("express");
const router = express.Router();
const groq = require("../services/groq");

/* ---------- START INTERVIEW ---------- */
router.post("/start", async (req, res) => {
  const { interviewType } = req.body;

  const prompt = `
You are a professional interviewer.

Interview role: ${interviewType}

Rules:
- Ask ONLY one interview question
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

/* ---------- PROCESS ANSWER ---------- */
router.post("/answer", async (req, res) => {
  const { interviewType, question, answer } = req.body;

  const prompt = `
You are conducting a ${interviewType} interview.

Question: ${question}
Candidate Answer: ${answer}

Tasks:
1. Give short feedback (2 lines)
2. Ask the NEXT interview question (only the question)
`;

  try {
    const response = await groq.chat(prompt);

    res.json({
      feedback: response,
      nextQuestion: response
    });
  } catch (err) {
    res.status(500).json({ error: "Answer processing failed" });
  }
});

/* ---------- FINAL FEEDBACK ---------- */
router.post("/feedback", async (req, res) => {
  const { interviewType, answers } = req.body;

  const prompt = `
You are an interviewer for ${interviewType}.

Candidate answers:
${answers.join("\n\n")}

Give:
- Strengths
- Weaknesses
- Overall score out of 10
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
