// rafce
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import GameCard from './GameCard'
import { getDataAPI } from '../../services/allAPI'

const View = (addResponse) => {
  const [deleteVideoResponse,setDeleteVideoResponse] = useState("")
 const [allGames,setAllGames] = useState([])

  useEffect(()=>{
    getAllGames()
  },[addResponse,deleteVideoResponse])
  console.log(allGames);

  const getAllGames = async ()=>{
    try{
      const result = await getDataAPI()
      console.log(result);
      if(result.status>=200 && result.status<300){
       setAllGames(result.data);
      }
    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
    <Row>
      {
        allGames?.length>0?
        allGames?.map(game=>(
          <Col key={game?.id} className='mb-2 ms-5 me-5' sm={12} md={6} lg={2}>
           <GameCard setDeleteVideoResponse={setDeleteVideoResponse} displayData={game} />
          </Col>
        ))
        :
        <div className="fw-bolder fs-3 text-danger">No Games uploaded till now!</div>
      }
    </Row>
    </>
  )
}

export default View