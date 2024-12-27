import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import img from './instagram.png'


function BasicExample() {
  return (
    <Navbar expand="lg"  bg="primary" data-bs-theme="primary">
      <Container>
          <Navbar.Brand href="https://www.instagram.com/mohamed_y_asser/" style={{color:"#fff",cursor:"pointer" }} className='navs'>
            <img
              alt=""
              src={img}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Mohamed Yasser
          </Navbar.Brand>
        </Container>
    </Navbar>
  );
}

export default BasicExample;