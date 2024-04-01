function loadHomeContent() {
    const contentWrapper = document.querySelector('.content-wrapper');
    contentWrapper.innerHTML = "<p>Hello</p>";
}

document.addEventListener('DOMContentLoaded', function() {
    const skillsButton = document.getElementById('mainNavButtons').querySelector('button:nth-child(2)');
    const skillsMenu = document.querySelector('.content-menu-backdrop');

    skillsButton.addEventListener('click', function() {
        if (skillsMenu.style.display === 'none' || skillsMenu.style.display === '') {
            skillsMenu.style.display = 'block';
        } else {
            skillsMenu.style.display = 'none';
        }
    });
});