import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider, createBrowserRouter,
} from "react-router-dom";
import {store} from './store/Store';
import {Provider} from 'react-redux'

import './index.css'
import Layout from './Layout';
import HomePage from './components/HomePage';
import Tools from './Pages/Tools';
import Fertilizers from './Pages/Fertilizers';
import Crops from './Pages/Crops';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import PrivacyPolicy from './Pages/PrivacyPolicy';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import InputArea from './Pages/InputArea';
import Menu from './Pages/Menu';
import Ph from './Pages/Ph';
import CropsSuggestion from './Pages/CropsSuggestion';


const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <><HomePage/><InputArea/></>
      },
      {
        path: '/tools',
        element: <Tools/>
      }
      ,
      {
        path: '/fertilizers',
        element: <Fertilizers/>
      }
      ,
      {
        path: '/crops',
        element: <Crops/>
      }
      ,
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy/>
      }
      ,
      {
        path: '/about-us',
        element: <AboutUs/>
      }
      ,
      {
        path: '/contact-us',
        element: <ContactUs/>
      }
      ,
      {
        path: '/menu',
        element: <Menu/>
      }
      ,
      {
        path: '/ph',
        element: <Ph/>
      },
      {
        path: '/npk',
        element: <CropsSuggestion/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
