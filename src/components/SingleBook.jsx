import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import FantasyBooks from "../data/fantasy.json";
import Button from "react-bootstrap/Button";

const SingleBook = function (props) {
  return (
    <Container fluid>
      <Row className="bg-warning p-4">
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3" key={props.book.asin}>
          <Card>
            <Card.Img variant="top" src={props.book.img} />
            <Card.Body>
              <Card.Title>{props.book.title}</Card.Title>
              <div className="d-flex justify-content-between ">
                <Card.Text>Prezzo: €{props.book.price}</Card.Text>
                <Card.Text>Genere: {props.book.category}</Card.Text>
              </div>
              <Button variant="warning">Acquista</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBook;
