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

        var table = document.createElement('table');
        table.className = 'table table-striped';

        var thead = document.createElement('thead');
        var headerRow = document.createElement('tr');

        var headers = ["Numer", "First name","Last name", "Speaks English?", "Height", "Gender", "Country", "Race", "Language"];

        headers.forEach(headerText => {
            var th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        var tbody = document.createElement('tbody');

        data.forEach(item => {
            var row = document.createElement('tr');

            Object.values(item).forEach(value => {
                var td = document.createElement('td');
                td.textContent = value;
                row.appendChild(td);
            });

            tbody.appendChild(row);
        });

        table.appendChild(tbody);

        dataContainer.innerHTML = '';
        dataContainer.appendChild(table);
    }
});