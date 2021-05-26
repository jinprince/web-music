import React ,{memo} from 'react';
import {renderRoutes} from "react-router-config"
import {HashRouter} from 'react-router-dom'

import routes from './router'

import HYAppFooter from './components/app-footer'
import HYAppHeader from './components/app-header'

export default memo(function App(){
  return (
    <HashRouter>
      <HYAppHeader></HYAppHeader>
       {renderRoutes(routes)}
      < HYAppFooter></HYAppFooter>
     
    </HashRouter>
  )
}); 