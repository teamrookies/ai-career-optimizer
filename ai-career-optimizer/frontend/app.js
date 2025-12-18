function generateResume() {
  const name = document.getElementById("rc-name").value.trim();
  const skills = document.getElementById("rc-skills").value.trim();
  const education = document.getElementById("rc-education").value.trim();
  const projects = document.getElementById("rc-projects").value.trim();

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

function enhanceResume() {
  const resumeText = document.getElementById("re-text").value.trim();
  const targetRole = document.getElementById("re-role").value.trim();

  const output = document.getElementById("enhancedOutput");

  if (!resumeText || !targetRole) {
    output.innerText = "Please provide resume text and target role.";
    return;
  }

  output.innerText =
    "Target Role: " + targetRole + "\n\n" +
    "Enhanced Resume:\n\n" +
    resumeText;
}
