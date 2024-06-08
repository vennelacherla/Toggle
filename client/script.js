
const toggleButton = document.getElementById('theme-toggle');
const lightThemeButton = document.getElementById('light-theme-button');
let currentTheme = localStorage.getItem('theme') || 'light-mode';


document.body.classList.add(currentTheme);


function toggleTheme(newTheme) {
    document.body.classList.replace(currentTheme, newTheme);
    currentTheme = newTheme;
    localStorage.setItem('theme', newTheme);
}


toggleButton.addEventListener('click', () => {
    const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';
    toggleTheme(newTheme);
});


lightThemeButton.addEventListener('click', () => {
    toggleTheme('light-mode');
});

