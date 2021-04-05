import React,{useState,useEffect} from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Alert(){
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);


  // const reload=()=>window.location.reload();

  useEffect(()=>{
    
},[])
  
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Foreign & Commonwealth Office and Foreign, Commonwealth & Development Office</Modal.Title>
        </Modal.Header>
        <Modal.Body>It is illegal to travel abroad for holidays. Follow current COVID-19 rules where you live: England, Scotland, Wales and Northern Ireland. In England, you must have a permitted reason to travel abroad and complete a declaration form.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default Alert;