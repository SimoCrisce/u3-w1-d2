import "./App.css";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
