import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import content from '../../locales/en.json'
import './ContactUs.scss'

function Example() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='ContactusMainButton' variant="primary" onClick={handleShow}>
                {content.ContactUs.MainButton}
            </Button>

            <Modal className='Contactus_Modal' show={show} onHide={handleClose} centered={true}>
                <Modal.Header className='ContactUsModal-Header' closeButton>
                    <Modal.Title className='Contact_Modal_Title'>{content.ContactUs.ContactTitle}</Modal.Title>
                </Modal.Header>

                <Modal.Body className='ContactUs-Modal-Body'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{content.ContactUs.EmailAddress}</Form.Label>
                            <Form.Control
                                className='FormControlInput'
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{content.ContactUs.PhoneNum}</Form.Label>
                            <Form.Control
                                className='FormControlInput'
                                type="text"
                                placeholder="0xxxxxxxxxxx"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='ContactUs-Modal-Footer'>
                    <div className='Modal-Footer-Container'>
                        <Button variant="secondary" onClick={handleClose}>
                            {content.ContactUs.Close}
                        </Button>
                        <Button className='contactForm-submit' variant="primary" onClick={handleClose}>
                            {content.ContactUs.Submit}
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;