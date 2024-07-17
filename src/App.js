import React from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const App = () => {
  return (
    <Provider store={appStore}>
   <>
   <Header/>
   <MainContainer/>
   </>
   </Provider>
  )
}

export default App;