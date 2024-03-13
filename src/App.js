import "./App.css";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import SingleBook from "./components/SingleBook";
import Fantasy from "./data/fantasy.json";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList arrayOfBooks={Fantasy} />
      {/* <AllTheBooks /> */}
      <SingleBook aBook={Fantasy[0]} />
      <MyFooter />
    </>
  );
}

export default App;
