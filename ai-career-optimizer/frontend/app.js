
const API = "https://ai-career-optimizer.onrender.com"; // ← PUT RENDER URL HERE

async function generateResume() {
  const name = document.getElementById("rc-name").value;
  const skills = document.getElementById("rc-skills").value;
  const education = document.getElementById("rc-education").value;
  const projects = document.getElementById("rc-projects").value;

  if (!name || !skills || !education) {
    alert("Fill required fields");
    return;
  }

  const res = await fetch(`${API}/api/resume/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, skills, education, projects })
  });

  const data = await res.json();

  // ✅ PURE AI OUTPUT
  document.getElementById("resumeOutput").innerText =
    data.resume || "No AI response";
}

async function enhanceResume() {
  const resume = document.getElementById("re-text").value;
  const targetRole = document.getElementById("re-role").value;

  if (!resume || !targetRole) {
    alert("Missing fields");
    return;
  }

  const res = await fetch(`${API}/api/enhance`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ resume, targetRole })
  });

  const data = await res.json();

  // ✅ PURE AI OUTPUT
  document.getElementById("enhancedOutput").innerText =
    data.enhancedResume || "No AI response";
}
