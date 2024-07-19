import React from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BodyPage from './components/BodyPage';
import WatchPage from './components/WatchPage';

const App = () => {

  const appRouter=createBrowserRouter([{
    path:'/',
    element:<MainContainer/>,
    children:[{
      path:"/watch",
      element:<WatchPage/>
    },
    {
      path:'/',
      element:<BodyPage/>
  }]
  }])
  return (
    <Provider store={appStore}>
   <>
   <Header/>
<RouterProvider router={appRouter}/>
   </>
   </Provider>
  )
}

export default App;