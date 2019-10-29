import cowData from '../../helpers/data/cows';
import './cowList.scss';

const buildCows = () => {
  cowData.getCows()
    .then((response) => {
      const demCows = response.data.cows;
      const cows = [];
      Object.keys(demCows).forEach((cowId) => { // makes an array of the keys and does a forEach loop on it
        demCows[cowId].id = cowId; // adds id into each object
        cows.push(demCows[cowId]); // pushes each object into cows array
      });
      console.log('it worked!', cows);
    })
    .catch((error) => {
      console.error('shit broke.', error);
    });
};

export default { buildCows };
