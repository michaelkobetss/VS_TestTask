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
        const headerElement = app.firstElementChild;
        headerElement.insertAdjacentHTML('afterend', bannerHtml);
        return fetch('components/features.html');
    })
    .then(response => response.text())
    .then(featuresHtml => {
        const bannerElement = document.querySelector('.banner');
        bannerElement.insertAdjacentHTML('afterend', featuresHtml);
        return fetch('components/how-to-use.html');
    })
    .then(response => response.text())
    .then(howToUseHtml => {
        const featuresElement = document.querySelector('.features');
        featuresElement.insertAdjacentHTML('afterend', howToUseHtml);
        return fetch('components/tariffs.html');
    })
    .then(response => response.text())
    .then(tariffsHtml => {
        const howToUseElement = document.querySelector('.how-to-use');
        howToUseElement.insertAdjacentHTML('afterend', tariffsHtml);
        return fetch('components/contact.html'); // Добавляем загрузку contact.html
    })
    .then(response => response.text())
    .then(contactHtml => {
        const tariffsElement = document.querySelector('.tariffs'); // Опора на tariffs
        tariffsElement.insertAdjacentHTML('afterend', contactHtml); // Вставляем contact.html
        return fetch('components/footer.html');
    })
    .then(response => response.text())
    .then(footerHtml => {
        app.insertAdjacentHTML('beforeend', footerHtml);
    })
    .catch(error => console.error('Ошибка при загрузке компонентов:', error));
});