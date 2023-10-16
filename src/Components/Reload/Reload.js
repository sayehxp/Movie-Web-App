//____________RELOAD________________
import React from 'react'
import logo from './logo.gif'
//__________________________
const Reload = () => {


  return (
    <div className='reload row d-flex bg-dark justify-content-center w-100' style={{'height': '100vh'}}>
      <div className='img-container col-12 col-md-6'>
      <img src={logo} width={'100%'} height={'100%'}></img>
      </div>
    </div>
  )
}

export default Reload