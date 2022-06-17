// == Import lib
import { useState } from 'react';
// == Import SCSS
import 'src/styles/_reset.css';
import './app.scss';
// == Import Datas
import data from 'src/data.json';
// == Import Components
import Comment from '../Comment';

// == Composant
function App() {
  return (
    <div className="app">
      {
        data.comments.map((c) => (<Comment key={c.id} comment={c} />))
      }
    </div>
  );
}

// == Export
export default App;
