async function createResume() {
  const res = await fetch("https://ai-career-optimizer.onrender.com/api/resume/create", {
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
}const API_BASE = "https://ai-career-optimizer.onrender.com";

const questions = [
  { key: "name", text: "Enter your full name:" },
  { key: "email", text: "Enter your email:" },
  { key: "phone", text: "Enter your phone number:" },
  { key: "objective", text: "What is your career objective?" },
  { key: "education", text: "Enter your education details:" },
  { key: "skills", text: "Enter your skills (comma separated):" },
  { key: "experience", text: "Enter your experience (or Fresher):" },
  { key: "projects", text: "Enter your projects:" },
  { key: "certifications", text: "Enter certifications (or None):" }
];

let currentStep = 0;
let resumeData = {};

// Start Resume Wizard
function startResumeWizard() {
  currentStep = 0;
  resumeData = {};
  askNextQuestion();
}

// Ask Question
function askNextQuestion() {
  if (currentStep >= questions.length) {
    generateResume();
    return;
  }

  const q = questions[currentStep];
  document.getElementById("questionBox").innerText = q.text;
  document.getElementById("answerInput").value = "";
}

// Submit Answer
function submitAnswer() {
  const answer = document.getElementById("answerInput").value.trim();
  if (!answer) {
    alert("Please enter a value");
    return;
  }

  resumeData[questions[currentStep].key] = answer;
  currentStep++;
  askNextQuestion();
}

// Generate Resume (Final Step)
async function generateResume() {
  document.getElementById("questionBox").innerText = "Generating Resume...";
  document.getElementById("answerInput").style.display = "none";
  document.getElementById("submitBtn").style.display = "none";

  try {
    const res = await fetch(`${API_BASE}/api/resume/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resumeData)
    });

    const data = await res.json();
    document.getElementById("resumeOutput").innerText = data.resume;
  } catch (err) {
    alert("Resume generation failed");
  }
}


async function enhanceResume() {
  const res = await fetch("https://ai-career-optimizer.onrender.com/api/resume/enhance", {
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



