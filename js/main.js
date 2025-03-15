
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    fetch('components/header.html')
    .then(response => response.text())
    .then(headerHtml => {
        app.insertAdjacentHTML('afterbegin', headerHtml);
    })
    .catch(error => console.error('Ошибка при загрузке header.html:', error));

    fetch('components/footer.html')
    .then(response => response.text())
    .then(footerHtml => {
        app.insertAdjacentHTML('beforeend', footerHtml);
    })
    .catch(error => console.error('Ошибка при загрузке footer.html:', error));
});