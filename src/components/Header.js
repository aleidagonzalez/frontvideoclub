import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
    return (
        <header className="bg-dark text-white py-1">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1>Videoclub</h1>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}