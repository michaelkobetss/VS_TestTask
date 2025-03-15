// main.js
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    fetch('components/header.html')
    .then(response => response.text())
    .then(headerHtml => {
        app.insertAdjacentHTML('afterbegin', headerHtml);
        return fetch('components/banner.html');
    })
    .then(response => response.text())
    .then(bannerHtml => {
        // Insert banner immediately after the header
        const headerElement = app.firstElementChild;
        headerElement.insertAdjacentHTML('afterend', bannerHtml);
        return fetch('components/footer.html');
    })
    .then(response => response.text())
    .then(footerHtml => {
        app.insertAdjacentHTML('beforeend', footerHtml);
    })
    .catch(error => console.error('Ошибка при загрузке компонентов:', error));
});
