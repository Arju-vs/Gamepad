// rafce
import React from 'react'
import { Card } from 'react-bootstrap'
import { removeDataAPI } from '../../services/allAPI'
const GameCard = ({displayData,setDeleteVideoResponse}) => {

  const removeGame = async (id) =>{
    try{
      const result = await removeDataAPI(id)
      setDeleteVideoResponse(result)
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
    <Card style={{fontSize:'20px'}}>
      <Card.Img variant="top" src={displayData?.imageUrl} />
      <Card.Body>
        <Card.Title className='text-danger fs-5'>{displayData?.name}</Card.Title>
        <Card.Text>
        Hours Taken: {displayData?.time} hours
          <button onClick={()=>removeGame(displayData?.id)} className='btn fs-5'><i className=" fa-regular fa-trash-can text-danger"></i></button>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default GameCard