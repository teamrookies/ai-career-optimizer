const API_BASE = "https://ai-career-optimizer.onrender.com/api";

/* ================= RESUME CREATOR ================= */
window.generateResume = async function () {
  const name = document.getElementById("rc-name").value.trim();
  const skills = document.getElementById("rc-skills").value.trim();
  const education = document.getElementById("rc-education").value.trim();
  const projects = document.getElementById("rc-projects").value.trim();

  const output = document.getElementById("resumeOutput");

  if (!name || !skills || !education) {
    output.innerText = "Please provide Name, Skills, and Education.";
    return;
  }

  try {
    const response = await fetch(${API_BASE}/resume/create, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        skills,
        education,
        projects
      })
    });

    const data = await response.json();
    output.innerText = data.resume || "AI returned no resume.";
  } catch (error) {
    output.innerText = "Failed to generate resume.";
  }
};

/* ================= RESUME ENHANCER ================= */
window.enhanceResume = async function () {
  const resumeText = document.querySelector("textarea").value.trim();
  const targetRole = document.querySelector(
    'input[placeholder="Target Role"]'
  ).value.trim();

  const output = document.getElementById("enhancedOutput");

  if (!resumeText || !targetRole) {
    output.innerText = "Please provide resume text and target role.";
    return;
  }

  try {
    const response = await fetch(${API_BASE}/resume/enhance, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        resumeText,
        targetRole
      })
    });

    const data = await response.json();
    output.innerText = data.enhancedResume || "AI returned no enhancement.";
  } catch (error) {
    output.innerText = "Failed to enhance resume.";
  }
};
