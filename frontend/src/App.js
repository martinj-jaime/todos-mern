import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Navigation from './components/Navigation'
import CreateUser from './components/CreateUser'
import CreateNote from './components/CreateNote'
import NotesList from './components/NotesList'


function App() {
  return (
    <Router>
      <div>
        < Navigation />
      </div>

      <div className="container p-4">
        <Route path="/notes" component={ NotesList } />
        <Route path="/edit/:id" component={ CreateNote } />
        <Route path="/create" component={ CreateNote } />
        <Route path="/user" component={ CreateUser } />
      </div>





    </Router>
  );
}

export default App;
