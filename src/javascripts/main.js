import cowList from './components/cowList/cowList';
import '../styles/main.scss';
import 'bootstrap';

const init = () => {
  cowList.buildCows();
};

init();
