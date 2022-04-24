import React from 'react'
import Main from '../../components/Main/Main'
import Sidebar from '../../components/Sidebar/Sidebar'

import './Landing.scss';

const Landing = () => {

  return (
    <div className='landing'>
        <Main className='main'/>
        <Sidebar className='sidebar'/>

    </div>

  )
}

export default Landing