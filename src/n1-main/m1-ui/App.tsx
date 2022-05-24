import React from 'react';
import {BrowserRouter} from "react-router-dom";
import s from './App.module.css'
import Routers from "./routes/Routers";
import Header from "./header/Header";


function App() {

  return (
      <div className={s.app}>
          <div className={s.container}>
              <BrowserRouter>
                  {/*<Provider store={store}>*/}
                  <Header/>
                  <Routers/>
                  {/*</Provider>*/}
              </BrowserRouter>
          </div>
      </div>


  );
}

export default App;
