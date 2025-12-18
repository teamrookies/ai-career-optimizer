const express = require("express");
const askGroq = require("../services/groq");

const router = express.Router();

router.post("/create", async (req, res) => {
  const { name, skills, education, projects } = req.body;

  const prompt = `
Create a professional, ATS-friendly resume.

Name: ${name}
Skills: ${skills}
Education: ${education}
Projects: ${projects}

Rules:
- Use clear headings
- Use bullet points
- Keep it concise
- No emojis
- Professional tone
`;

  try {
    const resume = await askGroq(prompt);
    res.json({ resume });
  } catch (error) {
    console.error("GROQ ERROR:", error.response?.data || error.message);
    res.status(500).json({
      error: "Resume generation failed",
      details: error.response?.data || error.message
    });
  }
});

module.exports = router;
