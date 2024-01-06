document.addEventListener("DOMContentLoaded", function () {
    fetch('https://my.api.mockaroo.com/country.json?key=cf6b9050')
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    function displayData(data) {
        var dataContainer = document.getElementById('data-container');

        dataContainer.innerHTML = '';

        data.forEach(item => {
            var card = document.createElement('div');
            card.className = 'card mb-3';

            var cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            var cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.textContent = JSON.stringify(item);

            cardBody.appendChild(cardText);
            card.appendChild(cardBody);

            dataContainer.appendChild(card);
        });
    }
});