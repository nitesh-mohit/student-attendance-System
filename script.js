function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "teacher" && pass === "1234") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
  return false;
}

if (document.getElementById("studentList")) {
  document.getElementById("date").innerText = `Date: ${new Date().toDateString()}`;
  const list = document.getElementById("studentList");
  students.forEach(name => {
    const li = document.createElement("li");
    li.innerHTML = `<label>${name}</label>
      <input type="radio" name="${name}" value="Present" checked> Present
      <input type="radio" name="${name}" value="Absent"> Absent`;
    list.appendChild(li);
  });
}

function saveAttendance() {
  const attendance = {};
  students.forEach(name => {
    const radios = document.getElementsByName(name);
    radios.forEach(radio => {
      if (radio.checked) attendance[name] = radio.value;
    });
  });
  saveToStorage(getTodayKey(), attendance);
  alert("Attendance saved!");
}

if (document.getElementById("historyContainer")) {
  const historyDiv = document.getElementById("historyContainer");
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith("attendance_")) {
      const record = loadFromStorage(key);
      const date = key.replace("attendance_", "");
      const div = document.createElement("div");
      div.innerHTML = `<h3>${date}</h3>`;
      for (const [student, status] of Object.entries(record)) {
        div.innerHTML += `<p>${student}: ${status}</p>`;
      }
      historyDiv.appendChild(div);
    }
  });
}
