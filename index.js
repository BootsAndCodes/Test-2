document.addEventListener('DOMContentLoaded', function() {
    const skillsButton = document.getElementById('mainNavButtons').querySelector('button:nth-child(2)');
    const skillsMenuButtons = document.querySelectorAll('.attribute-menu-backdrop button');

    let isSkillsMenuOpen = false;

    skillsButton.addEventListener('click', function() {
        isSkillsMenuOpen = !isSkillsMenuOpen;

        if (isSkillsMenuOpen) {
            skillsMenuButtons.forEach(button => {
                button.style.display = 'block';
            });
        } else {
            skillsMenuButtons.forEach(button => {
                button.style.display = 'none';
            });
        }
    });
});