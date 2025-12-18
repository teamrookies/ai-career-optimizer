const API_BASE = "https://ai-career-optimizer.onrender.com";

// ================= RESUME CREATOR =================
function generateResume() {
  const name = document.getElementById("rc-name").value.trim();
  const skills = document.getElementById("rc-skills").value.trim();
  const education = document.getElementById("rc-education").value.trim();
  const projects = document.getElementById("rc-projects").value.trim();
  const output = document.getElementById("resumeOutput");

  if (!name || !skills || !education) {
    output.textContent = "Please fill Name, Skills and Education.";
    return;
  }

  output.textContent =
    "Name: " + name + "\n\n" +
    "Skills: " + skills + "\n\n" +
    "Education: " + education + "\n\n" +
    "Projects: " + projects;
}

// ================= RESUME ENHANCER =================
function enhanceResume() {
  const resumeText = document.querySelector("textarea").value.trim();
  const targetRole = document.querySelector("input[placeholder='Target Role']").value.trim();
  const output = document.getElementById("enhancedOutput");

  if (!resumeText || !targetRole) {
    output.textContent = "Please provide resume text and target role.";
    return;
  }

  output.textContent =
    "Target Role: " + targetRole + "\n\n" +
    "Enhanced Resume:\n\n" +
    resumeText;
}
