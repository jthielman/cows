import cowData from '../../helpers/data/cows';
import './cowList.scss';

const buildCows = () => {
  cowData.getCows()
    .then((cows) => {
      console.log('cow array from cowlist', cows);

      // call a domStringBuilder and pass in cows
    })
    .catch((error) => {
      console.error('shit broke.', error);
    });
};

export default { buildCows };
