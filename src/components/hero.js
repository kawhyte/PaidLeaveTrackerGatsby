import React from 'react'
import { Link } from 'gatsby'
import 'tachyons';
import '../layouts/tachyons/css/tachyons.css';


const Hero = () => {
  return (

<div id="bg-hero" class="contain bg-center cover"  style={{
    
      marginBottom: '1.45rem',

      
    }}>
      <div class="bg-black-0 pb5 pb6-m pb7-l">
    
        <div class="tc-l mt3 mt4-m mt5-l ph3">
          <h1 class="f2 f1-l fw2 black-80 mb0 lh-title">Paid Leave Legislation Tracker</h1>
          <h2 class="fw1 f3 black-50 mt3 mb1">Track and review upcoming family paid peave legislations</h2>

          
        </div>
      </div>
    </div>


  )
}

export default Hero
