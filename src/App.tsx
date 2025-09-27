import React from 'react';

import Navigation from './components/shared/Navigation';
import './App.css';
import Stage1 from './components/stages/Stage1';
import Stage2 from './components/stages/Stage2';
import Stage3 from './components/stages/Stage3';
import Stage4 from './components/stages/Stage4';

function App() {
  return (
    <div className="min-h-screen bg-dot-grid bg-white">
      <Navigation />
      <main className="relative">
        <Stage1 />
        <Stage2 />
        <Stage3 />
        <Stage4 />
      </main>
    </div>
  );
}

export default App;
