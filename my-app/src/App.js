import './style.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"; //bootstrap

function App() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      react Webフォーム
      </Navbar.Brand>
    </Container>
    </Navbar>
    
    
    
  );
}

export default App;
