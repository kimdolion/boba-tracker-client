import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import CreateOrder from '../Orders/CreateOrder'
import EditOrder from '../Orders/EditOrder'

const ModalContainer = (props) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <React.Fragment>
      <Button variant="info" onClick={handleShow}>
        { props.modalType === 'create' ? <p>Create an Order</p> : <p>Edit an Order</p> }
      </Button>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{ props.modalType === 'create' ? <h3>Create an Order</h3> : <h3>Edit an Order</h3> }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { props.modalType === 'create'
            ? <CreateOrder {...props} handleCancel={handleClose} />
            : <EditOrder {...props} handleCancel={handleClose} />
          }
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}
export default ModalContainer
