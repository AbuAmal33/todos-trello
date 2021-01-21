import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import loadTodos from '../redux/actions'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos())
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
