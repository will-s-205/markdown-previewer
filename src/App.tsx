import React from 'react';
import './App.scss';
import Editor from './components/Editor';
import Previewer from './components/Previewer'

export default function App() {
  return (
    <div className="App">
      <Previewer />
    </div>
  );
}
