import React ,{ useState} from 'react'
import { Link } from 'react-router-dom'
import {Container,Nav,Navbar} from 'react-bootstrap';
// import img1 from "../../assets/brandlogo.png"
 import img2 from "../assets/logo3.png"
import '../styles/HeaderStyle.css'
// import AuthContext from '../../Context/AuthContext';
function Header() {
//   const {auth, logout}=useContext(AuthContext)
    const scrollTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
      const [nav, setNav] = useState(false);
    
      // Scroll Navbar
      const changeValueOnScroll = () => {
        const scrollValue = document?.documentElement?.scrollTop;
        scrollValue > 100 ? setNav(true) : setNav(false);
      };
    
      window.addEventListener("scroll", changeValueOnScroll);
  return (
    <header className='header_container d-flex justify-content-center'>
  <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
    <Container>
      <Navbar.Brand href="#home">
        <Link to="/" className="logo" onClick={scrollTop}>
          <img src={img2} alt="logo" className='img-fluid logo_img' />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto" >
          <Nav.Link as={Link} to="/" style={{fontSize:"1.5rem",color:"#00e8bf"}}>HOME</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</header>
  )
}

export default Header
