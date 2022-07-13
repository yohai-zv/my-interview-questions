import './App.css';
import CommentCard from './CommentCard';

const date = new Date();

function App() {
  return (
    <div className="App">
     <CommentCard comment={'first comment'} date={date} user='some user'/>
    </div>
  );
}

export default App;

