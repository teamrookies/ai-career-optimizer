const express = require("express");
const router = express.Router();
const groq = require("../services/groq");

/* ===============================
   START INTERVIEW
   =============================== */
router.post("/start", async (req, res) => {
  try {
    const { interviewType } = req.body;

    if (!interviewType) {
      return res.status(400).json({ error: "Interview type is required" });
    }

    const prompt = `
You are a professional interviewer.

Interview role: ${interviewType}

Rules:
- Ask ONLY one interview question
- Medium difficulty
- No explanation
- No answers
`;

    const question = await groq.chat(prompt);

    res.json({
      question: question.trim()
    });
  } catch (error) {
    console.error("Interview start error:", error);
    res.status(500).json({ error: "Interview start failed" });
  }
});

/* ===============================
   PROCESS ANSWER & NEXT QUESTION
   =============================== */
router.post("/answer", async (req, res) => {
  try {
    const { interviewType, question, answer } = req.body;

    if (!interviewType || !question || !answer) {
      return res.status(400).json({ error: "Missing interview data" });
    }

    const prompt = `
You are conducting a ${interviewType} interview.

Previous Question:
${question}

Candidate Answer:
${answer}

Tasks:
1. Give short feedback (2 lines)
2. Ask the NEXT interview question ONLY
`;

    const aiResponse = await groq.chat(prompt);

    res.json({
      feedback: aiResponse.trim(),
      nextQuestion: aiResponse.trim()
    });
  } catch (error) {
    console.error("Interview answer error:", error);
    res.status(500).json({ error: "Answer processing failed" });
  }
});

/* ===============================
   FINAL FEEDBACK
   =============================== */
router.post("/feedback", async (req, res) => {
  try {
    const { interviewType, answers } = req.body;

    if (!interviewType || !answers || answers.length === 0) {
      return res.status(400).json({ error: "Interview data missing" });
    }

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

    const feedback = await groq.chat(prompt);

    res.json({
      feedback: feedback.trim()
    });
  } catch (error) {
    console.error("Final feedback error:", error);
    res.status(500).json({ error: "Feedback generation failed" });
  }
});

module.exports = router;
