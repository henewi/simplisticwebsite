// function setTheme() {
//     const root =
//     document.documentElement;
//     const newTheme = root.className === 'dark' ? 'light': 'dark';
//     root.className = newTheme;
// }

// document.querySelector('.theme-toggle').addEventListener('click', setTheme)

let modeToggle = document.querySelector('.mode-tog');
let darkMode = document.querySelector('.dark-mode');
modeToggle.addEventListener('click', () =>{
    darkMode.classList.toggle('active');
    modeToggle.classList.toggle('active');
})