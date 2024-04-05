import { Modal, Button, Container, Form, Input } from "react-bootstrap";
import React, { useState } from "react";

export default function Test() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Container>
        <Button variant="primary" onClick={handleOpen}></Button>
        <Modal show={open} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
            <Modal.Body>
              <Form method="post"></Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success">OK</Button>
            </Modal.Footer>
          </Modal.Header>
        </Modal>
      </Container>
    </>
  );
}
