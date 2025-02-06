import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "./components/common/container";
import { Home } from "./components/pages/home/home";

function App() {
  return (
    <>
      <Router>
          <Container>
            <Home />
          </Container>
      </Router>
    </>
  );
}

export default App;
