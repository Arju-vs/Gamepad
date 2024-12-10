// rafce
import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'

const CompGames = () => {
  const [addResponse, setAddResponse]= useState("")
  return (
    <>
    <div style={{paddingTop:'150px'}}>
      <div className='d-flex justify-content-center'>
          <Add setAddResponse={setAddResponse} />
      </div>
      <div className="container-fluid my-2 align-items-center">
        <h3 className='text-center'>Games Completed</h3>
        <div className='align-items-center text-center'>
          <View addResponse={addResponse} />
          </div>
      </div>
    </div>
    </>
  )
}

export default CompGames