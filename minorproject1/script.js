// 1. Smooth Scrolling for the 'View My Work' button
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// 2. Form Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === "" || email === "") {
        alert("Please fill in all required fields!");
    } else {
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
    }
});

// 3. Dynamic Console Message (Just for fun)
console.log("Welcome to my portfolio! Built with HTML, CSS, and JS.");