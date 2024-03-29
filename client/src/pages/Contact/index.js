import { Col } from 'react-bootstrap';
import ContactForm from '../../components/ContactForm';
import React from 'react';
import Profile from './profile.jpg';

export default function Contact() {
    return (
        <Col className="my-auto d-flex flex-column flex-md-row justify-content-center pt-5 pt-md-0 px-0">
            <Col md={4} className="text-center mx-auto px-0">
                <img
                    src={Profile}
                    className="img-fluid max-vh-100"
                    alt="profile"
                ></img>
            </Col>
            <Col md={6} className="mx-auto my-5 my-md-auto">
                <ContactForm />
            </Col>
        </Col>
    );
}
