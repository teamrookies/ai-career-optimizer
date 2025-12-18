const API_BASE = "https://ai-career-optimizer.onrender.com/api";

/* ================= RESUME CREATOR ================= */
async function generateResume() {
  const name = document.getElementById("rc-name").value.trim();
  const skills = document.getElementById("rc-skills").value.trim();
  const education = document.getElementById("rc-education").value.trim();
  const projects = document.getElementById("rc-projects").value.trim();

  if (!name || !skills || !education) {
    document.getElementById("resumeOutput").innerText =
      "Please provide Name, Skills and Education.";
    return;
  }

  try {
    const res = await fetch(${API_BASE}/resume/create, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        skills,
        education,
        projects,
      }),
    });

    const data = await res.json();
    document.getElementById("resumeOutput").innerText =
      data.resume || "No response from AI";

  } catch (err) {
    document.getElementById("resumeOutput").innerText =
      "Error generating resume.";
  }
}

/* ================= RESUME ENHANCER ================= */
async function enhanceResume() {
  const resumeText = document.querySelector("textarea").value.trim();
  const targetRole = document.querySelector('input[placeholder="Target Role"]').value.trim();

  if (!resumeText || !targetRole) {
    document.getElementById("enhancedOutput").innerText =
      "Please paste resume and target role.";
    return;
  }

  try {
    const res = await fetch(${API_BASE}/resume/enhance, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        resumeText,
        targetRole,
      }),
    });

    const data = await res.json();
    document.getElementById("enhancedOutput").innerText =
      data.enhancedResume || "No response from AI";

  } catch (err) {
    document.getElementById("enhancedOutput").innerText =
      "Error enhancing resume.";
  }
}
