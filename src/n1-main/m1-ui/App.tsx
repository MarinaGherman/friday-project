import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import s from './App.module.css'
import store from "../m2-bll/store";
import Main from "./Main/Main";


const App = () => {

  return (
      <div className={s.app}>
          <div className={s.container}>
              <BrowserRouter>
                  <Provider store={store}>
                      <Main/>
                  </Provider>
              </BrowserRouter>
          </div>
      </div>
  )
}

export default App;
