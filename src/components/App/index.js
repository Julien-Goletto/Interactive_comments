// == Import lib
import { useReducer, useState } from 'react';
// == Import SCSS
import 'src/styles/_reset.css';
import './app.scss';
// == Import Datas
import data from 'src/data.json';
// == Import Reducers
import addContentReducer from 'src/reducers/addContent.reducer';
// == Import Components
import Comment from '../Comment';

// == Composant
function App() {
  const [comments, dispatch] = useReducer(addContentReducer, data.comments);
  // On extrait l'id du dernier message posté
  const [lastId, setLastId] = useState(
    Math.max(...data.comments.map((c) => [c.id, c.replies.map((r) => r.id)]).flat(3)),
  );

  const incrementId = () => {
    setLastId(lastId + 1);
  };

  return (
    <div className="app">
      {
        comments.map((c) => (
          <Comment
            key={c.id}
            comment={c}
            currentUser={data.currentUser}
            reply={dispatch}
            incrementId={incrementId}
          />
        ))
      }
    </div>
  );
}

// == Export
export default App;
