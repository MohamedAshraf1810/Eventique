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
                    <div className='Modal-Body-Data'>
                        <div className='contactDetails mailDetails'>
                            <h6 className='contactTitle MailContact-title'>{content.ContactUs.EmailAddressTitle}</h6>
                            <a className='contactWayDetails MailContact-Data' href={`mailto:${content.ContactUs.EventiqueRealMail}`}>{content.ContactUs.EventiqueRealMail}</a>
                        </div>
                        <div className='contactDetails phoneDetails'>
                            <h6 className='contactTitle PhoneContact-title'>{content.ContactUs.PhoneNumberTitle}</h6>
                            <a className='contactWayDetails phoneContact-Data' href="#a">{content.ContactUs.EventiqueRealPhone}</a>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='ContactUs-Modal-Footer'>
                    <div className='Modal-Footer-Container'>
                        <Button className='closeModal' variant="secondary" onClick={handleClose}>
                            {content.ContactUs.Close}
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default Example;