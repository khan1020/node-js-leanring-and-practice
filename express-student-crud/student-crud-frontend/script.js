const API_URL = "http://localhost:3000/api/students";

const studentTable = document.getElementById("studentTable");
const addBtn = document.getElementById("addBtn");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const ageInput = document.getElementById("age");

// Fetch all students
async function fetchStudents() {
  const res = await fetch(`${API_URL}/read`);
  const students = await res.json();

  studentTable.innerHTML = "";

  students.forEach(student => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.age ? student.age : "-"}</td>
      <td>${student.lovelife ? student.lovelife : "-"}</td>
      <td class="actions">
        <button onclick="updateLoveLife('${student._id}')">Update LoveLife</button>
        <button class="delete" onclick="deleteAge('${student._id}')">Delete Age</button>
      </td>
    `;
    studentTable.appendChild(tr);
  });
}

// Add new student
addBtn.addEventListener("click", async () => {
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const age = parseInt(ageInput.value);

  if (!firstName || !lastName || !age) return alert("All fields required!");

  await fetch(`${API_URL}/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, lastName, age })
  });

  firstNameInput.value = "";
  lastNameInput.value = "";
  ageInput.value = "";

  fetchStudents();
});

// Update LoveLife dynamically
async function updateLoveLife(id) {
  const love = prompt("Enter LoveLife for this student:");
  if (!love) return;

  await fetch(`${API_URL}/update`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, lovelife: love })
  });

  fetchStudents();
}

// Delete Age dynamically
async function deleteAge(id) {
  if (!confirm("Are you sure you want to delete age?")) return;

  await fetch(`${API_URL}/delete-age`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id })
  });

  fetchStudents();
}

// Initial load
fetchStudents();
