// rafce
import React, {useState} from 'react'
import { Button,Modal,FloatingLabel,Form,Alert } from 'react-bootstrap'
import AddImage1 from '../assets/3.gif'
import { saveDataAPI } from '../../services/allAPI'

const Add = ({setAddResponse}) =>{
  const [gameDetails,setGameDetails] = useState({
    name:"",
    imageUrl:"",
    time:""
  })
  console.log(gameDetails);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDataUpdate = async ()=>{
    const {name,imageUrl,time} = gameDetails
    if(name && imageUrl && time){
      try{
        const result = await saveDataAPI(gameDetails)
        if(result.status>=200 && result.status<300){
          alert("Added Completely")
          handleClose()
          setAddResponse(result)
        }else{
          console.log(result);
        }
      }catch(err){
        console.log(err);
      }
    }else{
      alert("Please fill the form!!!")
    }
  }

  return (
    <>
    <div className="align-items-center">
      <Button onClick={handleShow} className='py-2 me-5 text-white' variant="outline-danger"><span className='fs-5 fw-bolder text-danger'>+</span> ADD</Button>
    </div>
    <Modal show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        
      >
        <Modal.Header closeButton>
          <Modal.Title>New Game Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className='text-center text-danger border'>NB: Simply fill the Fields</h6>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img src={AddImage1} alt="" className='img-fluid'/>
              </div>
              <div className="col-lg-6 p-3">
              <FloatingLabel controlId="floatingName" label="Game Name" className="mb-3">
                <Form.Control onChange={e=>setGameDetails({...gameDetails,name:e.target.value})} type="text" placeholder="Game Name" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingImg" label="Game Image URL" className="mb-3">
                <Form.Control onChange={e=>setGameDetails({...gameDetails,imageUrl:e.target.value})} type="text" placeholder="Game Image URL" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingName" label="Time taken to Complete (in numbers)" className="mb-3">
                <Form.Control onChange={e=>setGameDetails({...gameDetails,time:e.target.value})} type="number" placeholder="Time taken to Complete" autoComplete='off' />
              </FloatingLabel>
              <div className='d-flex justify-content-center'>
                <Button variant="dark" onClick={handleClose}>
                  Close
                </Button>
                <Button onClick={handleDataUpdate} variant="danger" className='ms-3'>ADD</Button>
              </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    
    </>
  )
}

export default Add