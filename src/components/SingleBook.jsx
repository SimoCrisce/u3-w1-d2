import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3} className="mb-3" key={this.props.aBook.asin}>
        <Card>
          <Card.Img
            variant="top"
            src={this.props.aBook.img}
            style={{ height: "300px", border: this.state.selected ? "2px solid red" : "none" }}
            onClick={() => {
              this.setState({
                selected: !this.state.selected,
              });
            }}
          />
          <Card.Body>
            <Card.Title>{this.props.aBook.title}</Card.Title>
            <div className="d-flex justify-content-between ">
              <Card.Text>Prezzo: €{this.props.aBook.price}</Card.Text>
              <Card.Text>Genere: {this.props.aBook.category}</Card.Text>
            </div>
            <Button variant="warning">Acquista</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
