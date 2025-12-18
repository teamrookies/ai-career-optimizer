const API_BASE = "https://ai-career-optimizer.onrender.com";
// ================= RESUME CREATOR =================
function generateResume() {
  const name = document.getElementById("rc-name").value;
  const skills = document.getElementById("rc-skills").value;
  const education = document.getElementById("rc-education").value;
  const projects = document.getElementById("rc-projects").value;

  const output = document.getElementById("resumeOutput");

  if (!name || !skills || !education) {
    output.innerText = "Please fill Name, Skills and Education.";
    return;
  }

  output.innerText =
    "Name: " + name + "\n\n" +
    "Skills: " + skills + "\n\n" +
    "Education: " + education + "\n\n" +
    "Projects: " + projects;
}

// ================= RESUME ENHANCER =================
function enhanceResume() {
  const resumeText = document.getElementById("re-text").value;
  const targetRole = document.getElementById("re-role").value;

  const output = document.getElementById("enhancedOutput");

  if (!resumeText || !targetRole) {
    output.innerText = "Please provide resume text and target role.";
    return;
  }

  output.innerText =
    "Target Role: " + targetRole + "\n\n" +
    "Enhanced Resume:\n" +
    resumeText;
}
