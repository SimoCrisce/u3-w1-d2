import ListGroup from "react-bootstrap/ListGroup";
import { Component } from "react";

class CommentsList extends Component {
  state = {
    comments: [],
  };

  fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
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
      .then((commentsFromAPI) => {
        this.setState({ comments: commentsFromAPI });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchComments();
  }
  render() {
    console.log(this.state.comments);
    return this.state.comments.map((comment) => {
      return (
        <ListGroup key={comment._id}>
          <ListGroup.Item>
            {comment.rate} | {comment.comment}
          </ListGroup.Item>
        </ListGroup>
      );
    });
  }
}

export default CommentsList;
