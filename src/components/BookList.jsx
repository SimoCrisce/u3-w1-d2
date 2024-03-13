import SingleBook from "./SingleBook";

const BookList = function (props) {
  props.arrayOfBooks.map((book) => {
    return <SingleBook />;
  });
};
export default BookList;
