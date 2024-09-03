import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../App.css'; // Asegúrate de crear e importar el archivo CSS

export default function Inicio() {
    return (
        <Container fluid className="text-center py-5 bg-light">
            <Row>
                <Col>
                    <h1 className="display-4 font-weight-bold mb-4">¡Bienvenido!</h1>
                    <p className="lead mb-5 text-muted">
                        Explora nuestra colección única de series y películas, cada una con una historia diferente que te enganchará. ¡Encuentra tus favoritas y empieza a verlas hoy mismo!
                    </p>
                    <Button variant="primary" size="lg" href="/Products">
                        Ver Series y películas
                    </Button>
                </Col>
            </Row>
            <Row className="justify-content-center mt-5">
                <Col md={4} className="d-flex justify-content-center mb-4">
                    <Card className="shadow-sm border-0" style={{ width: '35rem' }}>
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61EEBfj+THL._AC_SY741_.jpg" />
                        <Card.Body style={{ padding: '1rem' }}>
                            <Card.Title className="font-weight-bold">Serie del mes</Card.Title>
                            <Card.Text className="text-muted">

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="d-flex justify-content-center mb-4">
                    <Card className="shadow-sm border-0" style={{ width: '35rem' }}>
                        <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w1280/u2LADrvXAyMiBVhVoWhLi8WiXAL.jpg" />
                        <Card.Body style={{ padding: '1rem' }}>
                            <Card.Title className="font-weight-bold">Recién llegadas</Card.Title>
                            <Card.Text className="text-muted">

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="d-flex justify-content-center mb-4">
                    <Card className="shadow-sm border-0" style={{ width: '35rem' }}>
                        <Card.Img variant="top" src="https://static.wikia.nocookie.net/disney/images/5/5e/WandaVision_official_teaster_poster.png" />
                        <Card.Body style={{ padding: '1rem' }}>
                            <Card.Title className="font-weight-bold">Nº 1 en España</Card.Title>
                            <Card.Text className="text-muted">

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
