// --- Default credentials ---
const DEFAULT_PASSWORD = "12345";
const students = ["kashyap@college.edu", "sita@college.edu", "rahul@college.edu"];
const faculty = ["teacher@college.edu"];

// --- LOGIN FUNCTION ---
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) return alert("Please fill all fields!");

  const savedPasswords = JSON.parse(localStorage.getItem("passwords") || "{}");
  const actualPassword = savedPasswords[email] || DEFAULT_PASSWORD;

  if (faculty.includes(email)) {
    if (password === actualPassword) {
      localStorage.setItem("loggedInUser", email);
      showFacultyPage(email);
    } else alert("Incorrect password!");
    return;
  }

  if (!students.includes(email)) return alert("Email not registered!");
  if (password !== actualPassword) return alert("Incorrect password!");

  localStorage.setItem("loggedInUser", email);
  showStudentPage(email);
}

// --- SHOW STUDENT DASHBOARD ---
function showStudentPage(email) {
  hideAllPages();
  document.getElementById("student-page").classList.add("visible");
  document.getElementById("studentWelcome").textContent = `Welcome, ${email}`;
  loadStudentUploads(email);
}

// --- SHOW FACULTY DASHBOARD ---
function showFacultyPage(email) {
  hideAllPages();
  document.getElementById("faculty-page").classList.add("visible");
  document.getElementById("facultyWelcome").textContent = `Welcome, ${email}`;
  loadAllUploads();
}

// --- UPLOAD FUNCTION ---
function uploadAssignment() {
  const email = localStorage.getItem("loggedInUser");
  const fileInput = document.getElementById("fileInput");

  if (!fileInput.files.length) return alert("Please select a file!");

  const uploads = JSON.parse(localStorage.getItem("uploads") || "{}");
  const fileName = fileInput.files[0].name;

  if (!uploads[email]) uploads[email] = [];
  uploads[email].push({ name: fileName, feedback: "Pending Review" });

  localStorage.setItem("uploads", JSON.stringify(uploads));
  alert("Assignment uploaded successfully!");
  loadStudentUploads(email);
}

// --- LOAD STUDENT UPLOADS ---
function loadStudentUploads(email) {
  const uploads = JSON.parse(localStorage.getItem("uploads") || "{}");
  const userUploads = uploads[email] || [];
  const container = document.getElementById("studentUploads");
  container.innerHTML = "";

  userUploads.forEach(u => {
    const div = document.createElement("div");
    div.className = "review-box";
    div.innerHTML = `<b>${u.name}</b><br>Feedback: ${u.feedback}`;
    container.appendChild(div);
  });
}

// --- LOAD ALL UPLOADS FOR FACULTY ---
function loadAllUploads() {
  const uploads = JSON.parse(localStorage.getItem("uploads") || "{}");
  const container = document.getElementById("reviewList");
  container.innerHTML = "";

  for (const [student, files] of Object.entries(uploads)) {
    files.forEach((f, idx) => {
      const div = document.createElement("div");
      div.className = "review-box";
      div.innerHTML = `
        <b>${f.name}</b><br>
        <small>Student: ${student}</small><br>
        <textarea id="feedback-${student}-${idx}" rows="2" placeholder="Enter feedback">${f.feedback !== "Pending Review" ? f.feedback : ""}</textarea><br>
        <button onclick="saveFeedback('${student}', ${idx})">Save Feedback</button>
      `;
      container.appendChild(div);
    });
  }
}

// --- SAVE FEEDBACK ---
function saveFeedback(student, index) {
  const uploads = JSON.parse(localStorage.getItem("uploads") || "{}");
  const feedbackBox = document.getElementById(`feedback-${student}-${index}`);
  const feedback = feedbackBox.value.trim() || "No feedback given";
  uploads[student][index].feedback = feedback;
  localStorage.setItem("uploads", JSON.stringify(uploads));
  alert("Feedback saved!");
  loadAllUploads();
}

// --- CHANGE PASSWORD PAGE NAVIGATION ---
function goToChangePassword() {
  hideAllPages();
  document.getElementById("change-pass-page").classList.add("visible");
}

// --- UPDATE PASSWORD FUNCTION ---
function updatePassword() {
  const email = localStorage.getItem("loggedInUser");
  const oldPass = document.getElementById("oldPassword").value.trim();
  const newPass = document.getElementById("newPassword").value.trim();
  const confirmPass = document.getElementById("confirmPassword").value.trim();

  const savedPasswords = JSON.parse(localStorage.getItem("passwords") || "{}");
  const actualPassword = savedPasswords[email] || DEFAULT_PASSWORD;

  if (!oldPass || !newPass || !confirmPass)
    return alert("Please fill all fields!");
  if (oldPass !== actualPassword)
    return alert("Old password is incorrect!");
  if (newPass !== confirmPass)
    return alert("New passwords do not match!");

  savedPasswords[email] = newPass;
  localStorage.setItem("passwords", JSON.stringify(savedPasswords));
  alert("Password updated successfully!");

  backToDashboard();
}

// --- RETURN TO DASHBOARD ---
function backToDashboard() {
  const email = localStorage.getItem("loggedInUser");
  if (faculty.includes(email)) showFacultyPage(email);
  else showStudentPage(email);
}

// --- LOGOUT FUNCTION ---
function logout() {
  localStorage.removeItem("loggedInUser");
  hideAllPages();
  document.getElementById("login-page").classList.add("visible");
}

// --- HELPER FUNCTION ---
function hideAllPages() {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("visible"));
}
