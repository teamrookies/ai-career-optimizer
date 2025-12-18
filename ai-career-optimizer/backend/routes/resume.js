const express = require("express");
const router = express.Router();

router.post("/create", (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      objective,
      education,
      skills,
      experience,
      projects,
      certifications
    } = req.body;

    if (!name || !education || !skills) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const resume = `
${name.toUpperCase()}
${email || ""} | ${phone || ""}

==============================
CAREER OBJECTIVE
==============================
${objective || "Seeking an opportunity to apply my skills and grow professionally."}

==============================
EDUCATION
==============================
${education}

==============================
SKILLS
==============================
${skills}

==============================
EXPERIENCE
==============================
${experience || "Fresher / No prior experience"}

==============================
PROJECTS
==============================
${projects || "No projects provided"}

==============================
CERTIFICATIONS
==============================
${certifications || "None"}

==============================
DECLARATION
==============================
I hereby declare that the above information is true to the best of my knowledge.
`;

    res.json({ resume });
  } catch (err) {
    res.status(500).json({ error: "Resume generation failed" });
  }
});

module.exports = router;
