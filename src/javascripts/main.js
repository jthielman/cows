import cowList from './components/cowList/cowList';
import farmerCowData from './helpers/data/farmerCowData';
import farmerList from './components/farmerList/farmerList';
import '../styles/main.scss';
import 'bootstrap';

const init = () => {
  cowList.buildCows();
  farmerList.buildFarmers();

  farmerCowData.getFarmerCows()
    .then((farmerCows) => {
      // farmerCows should be an array of farmercow objects
      // they should also have the farmerCow id in them
      console.log('from main.js', farmerCows);
    })
    .catch((error) => console.error(error));
};

init();
