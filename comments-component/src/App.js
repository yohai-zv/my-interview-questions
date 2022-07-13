import './App.css';
import CommentCard from './CommentCard';

const date = new Date();

function App() {
  return (
    <div className="App">
     <CommentCard 
     user ={ {
       name: 'Liron Zluf',
      }}
      date={date}
      comment = 'This is a comment'

       />
    </div>
  );
}

export default App;

