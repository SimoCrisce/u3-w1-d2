import Container from "react-bootstrap/Container";

const MyFooter = function () {
  return (
    <Container fluid className="bg-dark text-white" style={{ height: "100px" }}>
      <p className="text-center pt-2">
        Made with <span className="text-danger">♥</span> by Simone
      </p>
    </Container>
  );
};

export default MyFooter;
