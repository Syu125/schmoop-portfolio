import React, { useState } from 'react';

import Navigation from './components/shared/Navigation';
import FloatingAvatar from './components/shared/FloatingAvatar';
import './App.css';
import Stage1 from './components/stages/Stage1';
import Stage2 from './components/stages/Stage2';
import Stage3 from './components/stages/Stage3';
import Stage4 from './components/stages/Stage4';

function App() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="relative">
        <Stage1 />
        <Stage2 />
        <Stage3 />
        <Stage4 />
      </main>
      <FloatingAvatar activeSection={activeSection} />
    </div>
  );
}

export default App;
