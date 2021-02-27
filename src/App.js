import './App.css';
import './Bootstrap/vendor/bootstrap/css/bootstrap.min.css';

import Navbar from './Components/Navibar/Navbar';
import PageBodyContainer from './containers/PageBodyContainer/PageBodyContainer';
import { useEffect } from 'react';

function App(props) {

  useEffect(() => {
    props.getUser();
  }, [])

  return (
    <div className="App">
      <Navbar />
      <PageBodyContainer />
    </div>
  );
}

export default App;
