// Get references to DOM elements
const studentForm = document.getElementById('studentForm');
const studentTableBody = document.getElementById('studentTableBody');
const resetBtn = document.getElementById('resetBtn');

// Array to store student records
let students = [];

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate form
function validateForm(name, rollNo, course, email) {
    if (!name.trim()) {
        alert('Please enter a name.');
        return false;
    }
    if (!rollNo.trim()) {
        alert('Please enter a roll number.');
        return false;
    }
    if (!course.trim()) {
        alert('Please enter a course.');
        return false;
    }
    if (!email.trim()) {
        alert('Please enter an email.');
        return false;
    }
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}

// Function to add student to table
function addStudentToTable(student, index) {
    const row = document.createElement('tr');
    
    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.rollNo}</td>
        <td>${student.course}</td>
        <td>${student.email}</td>
        <td><button class="delete-btn" data-index="${index}">Delete</button></td>
    `;
    
    studentTableBody.appendChild(row);
    
    // Add event listener to delete button
    const deleteBtn = row.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        deleteStudent(index);
    });
}

// Function to delete student
function deleteStudent(index) {
    if (confirm('Are you sure you want to delete this student record?')) {
        students.splice(index, 1);
        renderTable();
    }
}

// Function to render the entire table
function renderTable() {
    studentTableBody.innerHTML = '';
    students.forEach((student, index) => {
        addStudentToTable(student, index);
    });
}

// Function to reset form
function resetForm() {
    studentForm.reset();
}

// Event listener for form submission
studentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const rollNo = document.getElementById('rollNo').value;
    const course = document.getElementById('course').value;
    const email = document.getElementById('email').value;
    
    // Validate form
    if (!validateForm(name, rollNo, course, email)) {
        return;
    }
    
    // Create student object
    const student = {
        name: name.trim(),
        rollNo: rollNo.trim(),
        course: course.trim(),
        email: email.trim()
    };
    
    // Add student to array
    students.push(student);
    
    // Add student to table
    addStudentToTable(student, students.length - 1);
    
    // Reset form
    resetForm();
});

// Event listener for reset button
resetBtn.addEventListener('click', resetForm);
