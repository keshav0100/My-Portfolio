var typed = new Typed(".text", {
    strings: ["Backend Development", "Data Structures", "FrontEnd Development","Design Algorithms "],
    typeSpeed: 60,
    backSpeed: 20,
    backDelay: 1000,
    loop: true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const mainText = document.querySelector('.main-text');
    mainText.classList.add('visible'); 
});
    document.getElementById('theme-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');

        // Change the icon based on the theme
        const themeToggleBtn = document.getElementById('theme-toggle');
        if (document.body.classList.contains('dark-theme')) {
            themeToggleBtn.textContent = '🌞'; // Sun icon for light theme
        } else {
            themeToggleBtn.textContent = '🌙'; // Moon icon for dark theme
        }
    });

