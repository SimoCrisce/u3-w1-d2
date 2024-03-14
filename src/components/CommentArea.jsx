import ListGroup from "react-bootstrap/ListGroup";
import { Component } from "react";

class CommentArea extends Component() {
  fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWY3YTRjNTllYzAwMTk5MGQ3MDUiLCJpYXQiOjE3MTA0MTY2NzgsImV4cCI6MTcxMTYyNjI3OH0.xKALnDCckXJC-VU4fF3ED5jPeQpbjAoaZsCwyhP2WVE",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel reperimento dati");
        }
      })
      .then((comments) => {
        console.log("Comments", comments);
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <ListGroup as="ul">
        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
      </ListGroup>
    );
  }
}

export default CommentArea;
