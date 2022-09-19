

import React, { Component } from 'react'
import {Home} from '../Home/Home'
import { Portfolio } from '../Portfolio/Portfolio'
import  Work  from '../Work/Work'
 class Links extends Component {
   
 render ()  {
  return (
    <div>
      <Home/>
      <Work/>
      <Portfolio/>
    </div>
  )
 }}


export default Links