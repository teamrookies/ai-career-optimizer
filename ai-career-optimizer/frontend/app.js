const API_BASE = "https://ai-career-optimizer.onrender.com";

// ================= RESUME CREATOR =================
async function generateResume() {
  const name = document.getElementById("rc-name").value.trim();
  const skills = document.getElementById("rc-skills").value.trim();
  const education = document.getElementById("rc-education").value.trim();
  const projects = document.getElementById("rc-projects").value.trim();
  const output = document.getElementById("resumeOutput");

  if (!name || !skills || !education) {
    output.textContent = "Please fill Name, Skills and Education.";
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/api/resume/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, skills, education, projects })
    });

    const data = await res.json();
    output.textContent = data.resume || "Resume generated.";
  } catch (err) {
    output.textContent = "Server error. Try again.";
  }
}

// ================= RESUME ENHANCER =================
async function enhanceResume() {
  const resumeText = document.querySelector("textarea").value.trim();
  const targetRole = document.querySelector("input[placeholder='Target Role']").value.trim();
  const output = document.getElementById("enhancedOutput");

  if (!resumeText || !targetRole) {
    output.textContent = "Please provide resume text and target role.";
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/api/resume/enhance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resume: resumeText, role: targetRole })
    });

    const data = await res.json();
    output.textContent = data.enhanced || "Enhanced resume generated.";
  } catch (err) {
    output.textContent = "Server error. Try again.";
  }
}
