const express = require("express");
const askGroq = require("../services/groq");

const router = express.Router();

router.post("/enhance", async (req, res) => {
  const { resumeText, targetRole } = req.body;

  const prompt = `
Improve the following resume for the role: ${targetRole}

Rules:
- Optimize for ATS keywords
- Strengthen bullet points with action verbs
- Quantify impact where possible
- Keep professional tone
- Do not invent experience

Resume:
${resumeText}
`;

  try {
    const improved = await askGroq(prompt);
    res.json({ improved });
  } catch (error) {
    console.error("ENHANCER ERROR:", error.response?.data || error.message);
    res.status(500).json({
      error: "Resume enhancement failed",
      details: error.response?.data || error.message
    });
  }
});

module.exports = router;
