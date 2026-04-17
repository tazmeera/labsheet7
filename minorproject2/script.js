// script.js
const studentForm = document.getElementById('studentForm');
const tableBody = document.getElementById('tableBody');
const resetBtn = document.getElementById('resetBtn');

// Handle Form Submission
studentForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    // Get values
    const name = document.getElementById('name').value;
    const rollNo = document.getElementById('rollNo').value;
    const course = document.getElementById('course').value;
    const email = document.getElementById('email').value;

    // Simple Email Regex Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Create a new row
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${name}</td>
        <td>${rollNo}</td>
        <td>${course}</td>
        <td>${email}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    // Add Delete functionality to the specific button
    row.querySelector('.delete-btn').addEventListener('click', function() {
        row.remove();
    });

    // Append row to table
    tableBody.appendChild(row);

    // Clear form
    studentForm.reset();
});

// Manual Reset Button Logic
resetBtn.addEventListener('click', () => {
    if(confirm("Are you sure you want to clear the form?")) {
        studentForm.reset();
    }
});