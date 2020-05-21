import './style.css';
import imageData from './imageData';
import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default function Gallery() {
    return (
        <Container fluid className="h-100">
            <Row className="h-100 justify-content-center">
                <div className="gallery d-flex flex-column flex-md-row flex-nowrap my-auto">
                    {imageData.map((image, index) => (
                        <div className="gallery-item" key={`gallery-${index}`}>
                            <img
                                className="gallery-image"
                                src={image.img}
                                alt={image.alt}
                            ></img>
                        </div>
                    ))}
                </div>
            </Row>
        </Container>
    );
}
