const API = "https://ai-career-optimizer.onrender.com";

/* ================= RESUME CREATOR ================= */
async function generateResume() {
  const name = document.getElementById("rc-name").value;
  const skills = document.getElementById("rc-skills").value;
  const education = document.getElementById("rc-education").value;
  const projects = document.getElementById("rc-projects").value;

  if (!name || !skills || !education) {
    resumeOutput.textContent = "Please fill all required fields.";
    return;
  }

  const res = await fetch(`${API}/api/resume/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, skills, education, projects })
  });

  const data = await res.json();
  resumeOutput.textContent = data.resume || data.error;
}

/* ================= RESUME ENHANCER ================= */
async function generateResume() {
  const name = document.getElementById("rc-name").value.trim();
  const skills = document.getElementById("rc-skills").value.trim();
  const education = document.getElementById("rc-education").value.trim();
  const projects = document.getElementById("rc-projects").value.trim();

  if (!name || !skills || !education) {
    alert("Please fill Name, Skills, and Education");
    return;
  }

  const res = await fetch(${API}/api/resume/create, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, skills, education, projects })
  });

  const data = await res.json();
  document.getElementById("resumeOutput").textContent =
    data.resume || "Error generating resume";
}
