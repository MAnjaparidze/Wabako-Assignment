import './App.css';
import './Bootstrap/vendor/bootstrap/css/bootstrap.min.css';

import Navbar from './Components/Navibar/Navbar';
import PageBody from './Components/PageBody/PageBody';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PageBody />
    </div>
  );
}

export default App;
