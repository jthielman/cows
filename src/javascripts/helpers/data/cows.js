import axios from 'axios';

// const getCows = () => axios.get('https://teamtreehouse.com/ashleyclaiborne.json');

const getCows = () => new Promise((resolve, reject) => {
  axios.get('./../../../db/cows.json').then((response) => {
    const demCows = response.data.cows;
    const cows = [];
    Object.keys(demCows).forEach((cowId) => { // makes an array of the keys and does a forEach loop on it
      demCows[cowId].id = cowId; // adds id into each object
      cows.push(demCows[cowId]); // pushes each object into cows array
    });
    resolve(cows);
  }).catch((error) => reject(error));
});

export default { getCows };
