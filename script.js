function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.ham-icon');
    menu.classList.toggle('nomenu');
    icon.classList.toggle('open');
}