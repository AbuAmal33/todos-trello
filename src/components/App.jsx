import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Todos from './Todos';

function App() {
  return (
    <div className="app">
      <Header />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
