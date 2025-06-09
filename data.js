const students = ["Rahul", "Priya", "Amit", "Neha", "Arjun"];

function getTodayKey() {
  const today = new Date().toISOString().split("T")[0];
  return `attendance_${today}`;
}

function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadFromStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || null;
}
