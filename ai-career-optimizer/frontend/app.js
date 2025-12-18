async function createResume() {
  const res = await fetch("http://localhost:5000/api/resume/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      skills: skills.value,
      education: education.value,
      projects: projects.value
    })
  });

  const data = await res.json();
  document.getElementById("resumeOutput").innerText = data.resume;
}

async function enhanceResume() {
  const res = await fetch("http://localhost:5000/api/resume/enhance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      resumeText: resumeText.value,
      targetRole: role.value
    })
  });

  const data = await res.json();
  document.getElementById("enhancedOutput").innerText = data.improved;
}
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.onclick = () => {
  document.body.classList.toggle("dark");
};
