import Posts from "./Component/Posts/Posts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {

  return (
    <>
      <Container>
        <Row>
          <Posts />
        </Row>
      </Container>
    </>
  );
}

export default App;
