import './App.css';
import './Bootstrap/vendor/bootstrap/css/bootstrap.min.css';

import Navbar from './Components/Navibar/Navbar';
import PageBody from './Components/PageBody/PageBody';
import PostItemCard from './Components/PostItemCard/PostItemCard';
import SearcCard from './Components/Search/SearchCard';
import UserCommentModal from './Components/Comments/UserComment/UserCommentModal';
import CommentsSections from './Components/Comments/CommentsSections';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PageBody>
        <div className='col-md-8'>
          <PostItemCard />
        </div>
        <div className='col-md-4'>
          <div className='card my-4'>
            <SearcCard />
            <UserCommentModal />
            <CommentsSections />
          </div>
        </div>
        
      </PageBody>
    </div>
  );
}

export default App;
