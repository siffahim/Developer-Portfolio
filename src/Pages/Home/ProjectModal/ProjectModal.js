import React from 'react';
import { Modal } from "react-bootstrap";

const ProjectModal = ({ show, handleClose }) => {
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                className="py-5 modal-dialog modal-dialog-scrollable"
            >
                <Modal.Header closeButton
                    style={{ background: '#a8adb4' }}
                >
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{ background: '#1e2024' }}
                    className='text-light'
                >
                    Features:
                    <ul>
                        <li>❖ Implemented user interface employing React JS with SCSS/SASS, React Bootstrap.
                        </li>
                        <li>❖ Integrated simple google login and sign-up method, register new account, email &
                            password login with firebase authentication.
                        </li>
                        <li>
                            ❖ Handling re-direct system with react-router.
                        </li>
                        <li>
                            ❖ Developed Rest API backend with Express and Mongo DB for servicer technology.
                        </li>
                    </ul>
                    <h6> Technology Used:</h6>
                    React JS, React Router, React API, Firebase, Mongo Db, Node JS, Express JS,
                    React Bootstrap, Heroku, Context API.
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ProjectModal;