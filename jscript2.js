// Function to fetch JSON data
function fetchJSON() {
    // Fetch JSON file
    fetch("mock_data.json") // <-----------------------------------------------------------  Write your JSON file name here! If not the function will do a flip
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            // Get the table body element by ID
            const tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];

            // Iterate over the data (assuming it's an array of objects)
            for (let index = 0; index < Math.min(data.length, 10); index++) {
                // Create a table row element for each object in the JSON array
                const tr = document.createElement("tr");

                // Assuming each object has properties that you want to display in the table
                for (const key in data[index]) {
                    if (data[index].hasOwnProperty(key)) {
                        // Create a table cell for each property and import the data
                        const td = document.createElement("td");
                        td.textContent = data[index][key].toString().trim();
                        tr.appendChild(td); // Add the created cell to the current row
                    }
                }

                // Add the created row to the table body
                tableBody.appendChild(tr);
            }
        })
        .catch(error => console.error("Error fetching JSON data:", error)); // Log an error if fetching fails
}

// Call the function to fetch JSON data and import it to the table
fetchJSON();