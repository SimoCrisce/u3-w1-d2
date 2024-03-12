import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FantasyBooks from "../data/fantasy.json";
import HistoryBooks from "../data/history.json";
import HorrorBooks from "../data/horror.json";
import RomanceBooks from "../data/romance.json";
import ScifiBooks from "../data/scifi.json";

const AllTheBooks = function () {
  return (
    <Container fluid>
      <Row className="bg-warning p-4">
        <h2>Libri fantasy</h2>
        {FantasyBooks.slice(0, 8).map((Book) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
              <Card>
                <Card.Img variant="top" src={Book.img} />
                <Card.Body>
                  <Card.Title>{Book.title}</Card.Title>
                  <div className="d-flex justify-content-between ">
                    <Card.Text>Prezzo: €{Book.price}</Card.Text>
                    <Card.Text>Genere: {Book.category}</Card.Text>
                  </div>
                  <Button variant="warning">Acquista</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row className="bg-primary p-4">
        <h2>Libri di storia</h2>
        {HistoryBooks.slice(0, 8).map((Book) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
              <Card>
                <Card.Img variant="top" src={Book.img} />
                <Card.Body>
                  <Card.Title>{Book.title}</Card.Title>
                  <div className="d-flex justify-content-between ">
                    <Card.Text>Prezzo: €{Book.price}</Card.Text>
                    <Card.Text>Genere: {Book.category}</Card.Text>
                  </div>
                  <Button variant="primary">Acquista</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row className="bg-danger p-4">
        <h2>Libri horror</h2>
        {HorrorBooks.slice(0, 8).map((Book) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
              <Card>
                <Card.Img variant="top" src={Book.img} />
                <Card.Body>
                  <Card.Title>{Book.title}</Card.Title>
                  <div className="d-flex justify-content-between ">
                    <Card.Text>Prezzo: €{Book.price}</Card.Text>
                    <Card.Text>Genere: {Book.category}</Card.Text>
                  </div>
                  <Button variant="danger">Acquista</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row className="bg-danger-subtle p-4">
        <h2>Romanzi</h2>
        {RomanceBooks.slice(0, 8).map((Book) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
              <Card>
                <Card.Img variant="top" src={Book.img} />
                <Card.Body>
                  <Card.Title>{Book.title}</Card.Title>
                  <div className="d-flex justify-content-between ">
                    <Card.Text>Prezzo: €{Book.price}</Card.Text>
                    <Card.Text>Genere: {Book.category}</Card.Text>
                  </div>
                  <Button variant="light" className="btn-outline-danger">
                    Acquista
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row className="bg-success p-4">
        <h2>Libri di fantascienza</h2>
        {ScifiBooks.slice(0, 8).map((Book) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
              <Card>
                <Card.Img variant="top" src={Book.img} />
                <Card.Body>
                  <Card.Title>{Book.title}</Card.Title>
                  <div className="d-flex justify-content-between ">
                    <Card.Text>Prezzo: €{Book.price}</Card.Text>
                    <Card.Text>Genere: {Book.category}</Card.Text>
                  </div>
                  <Button variant="success">Acquista</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
