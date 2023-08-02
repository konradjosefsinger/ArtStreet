// // import React, { useState, useEffect } from 'react';
// // import { fetchUfoData } from '../services/ApiService'

// // function Ufo() {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     // This will run when the component mounts
// //     fetchUfoData()
// //       .then((data) => {
// //         if (data) {
// //           setData(data); // Update the component's state with the fetched data
// //         } else {
// //           console.log('Data not available.');
// //         }
// //       })
// //       .catch((error) => {
// //         console.error('Error:', error);
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       {/* Render the component using the fetched data */}
// //       {data.map((item) => (
// //         <div key={item.id}>{item.name}</div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default Ufo;

// import React, { useState, useEffect } from 'react';

// const UfoSightingsComponent = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const url = 'https://ufo-sightings.p.rapidapi.com/statistics/87250';
//       const options = {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': '5d50a3f5d2mshe43fc937be55ceap12adb6jsn79d7b5576e4e',
//           'X-RapidAPI-Host': 'ufo-sightings.p.rapidapi.com',
//         },
//       };

//       try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array, fetches data only once on mount

//   return (
//     <div>
//       <h1>UFO Sightings Statistics</h1>
//       {data ? (
//         <pre>{data}</pre>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// };

// export default UfoSightingsComponent;
