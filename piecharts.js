// Gender chart

async function fetchData() {
    try {
      const response = await fetch('https://my.api.mockaroo.com/country.json?key=cf6b9050');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Function to create the pie chart
  async function createPieChart() {
    const data = await fetchData();

    if (data) {
      // Extract gender data from JSON
      const genderData = data.map(entry => entry.gender);

      // Count occurrences of each gender
      const genderCounts = {};
      genderData.forEach(gender => {
        genderCounts[gender] = (genderCounts[gender] || 0) + 1;
      });

      // Extract labels and values from gender counts
      const labels = Object.keys(genderCounts);
      const values = Object.values(genderCounts);

      // Create the chart
      const ctx = document.getElementById('genderPieChart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            data: values,
            backgroundColor: getRandomColors(labels.length),
            borderWidth: 1,
          }],
        },
      });
    }
  }

  // Helper function to generate random colors
  function getRandomColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`;
      colors.push(randomColor);
    }
    return colors;
  }

  // Call the function to create the pie chart
  createPieChart();

  // height chart
  async function fetchData() {
      try {
        const response = await fetch('https://my.api.mockaroo.com/country.json?key=cf6b9050');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Function to create the pie chart
    async function createPieChart() {
      const data = await fetchData();

      if (data) {
        // Extract gender data from JSON
        const genderData = data.map(entry => entry.gender);

        // Count occurrences of each gender
        const genderCounts = {};
        genderData.forEach(gender => {
          genderCounts[gender] = (genderCounts[gender] || 0) + 1;
        });

        // Extract labels and values from gender counts
        const labels = Object.keys(genderCounts);
        const values = Object.values(genderCounts);

        // Create the chart
        const ctx = document.getElementById('genderPieChart').getContext('2d');
        const myChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: labels,
            datasets: [{
              data: values,
              backgroundColor: getRandomColors(labels.length),
              borderWidth: 1,
            }],
          },
        });
      }
    }

    // Helper function to generate random colors
    function getRandomColors(count) {
      const colors = [];
      for (let i = 0; i < count; i++) {
        const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`;
        colors.push(randomColor);
      }
      return colors;
    }

    // Call the function to create the pie chart
    createPieChart();

// race chart

async function fetchData() {
    try {
      const response = await fetch('https://my.api.mockaroo.com/country.json?key=cf6b9050');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Function to create the pie chart
  async function createPieChart() {
    const data = await fetchData();

    if (data) {
      // Extract gender data from JSON
      const raceData = data.map(entry => entry.race);

      // Count occurrences of each gender
      const raceCounts = {};
      raceData.forEach(race => {
        raceCounts[race] = (raceCounts[race] || 0) + 1;
      });

      // Extract labels and values from gender counts
      const labels = Object.keys(raceCounts);
      const values = Object.values(raceCounts);

      // Create the chart
      const ctx = document.getElementById('racePieChart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            data: values,
            backgroundColor: getRandomColors(labels.length),
            borderWidth: 1,
          }],
        },
      });
    }
  }

  // Helper function to generate random colors
  function getRandomColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`;
      colors.push(randomColor);
    }
    return colors;
  }

  // Call the function to create the pie chart
  createPieChart();