import SingleBook from "./SingleBook";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const BookList = function (props) {
  return (
    <Container>
      <Row>
        {props.arrayOfBooks.map((book) => {
          return <SingleBook aBook={book} key={book.asin} />;
        })}
      </Row>
    </Container>
  );
};

export default BookList;
