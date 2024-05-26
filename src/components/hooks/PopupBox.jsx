import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function PopupBox() {
const [show, setshow] = useState(false);
const handleShow=()=> setshow(true);
const handleClose=()=> setshow(false);
  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        Open Popup
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Popup Title
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>this is the popup box</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
                close
            </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
