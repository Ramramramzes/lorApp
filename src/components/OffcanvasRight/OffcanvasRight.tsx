import React, { useState } from 'react';
// import styles from './offcanvasright.css';
import { Button, Offcanvas } from 'react-bootstrap';
import { CheckedList } from '../CheckedList';

export function OffcanvasRight() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}className="me-2">Посмотреть список</Button>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Выбранные пункты: </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CheckedList />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
