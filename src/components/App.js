import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import loadTodos from '../redux/actions'

function App() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.loadingTodos);

  useEffect(() => {
    dispatch(loadTodos())
  }, [dispatch]);

  if (loading === true) {
    return (
      <div>
        идёт загрузка повременикас...
      </div>
    )
  }

  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
