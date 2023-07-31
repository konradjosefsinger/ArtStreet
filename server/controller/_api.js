// Function to fetch data from the API
async function fetchData() {
  const url = 'http://ufo-api.herokuapp.com/api/sightings/search?limit=200';

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}


// // Usage example
// fetchData()
//   .then((data) => {
//     if (data) {
//       console.log(data); // Process the data as needed
//     } else {
//       console.log('Data not available.');
//     }
//   });
