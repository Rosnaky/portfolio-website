import { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg"
import Logo4 from "../assets/img/Logo4.png"

export const NavBar = () => {
    
    const [activeLink, setactiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setactiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link href="projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/ronak-patel-ab7ab7224/"><img src={navIcon1} alt=""/></a>
                            <a href="https://github.com/RosnakPatel"><img src={Logo4} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={() => console.log("connect button clicked")}><span>Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}