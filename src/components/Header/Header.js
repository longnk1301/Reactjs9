import { memo, useContext } from "react";
import { DataContext } from "../../context";
import { UserContext } from "../../context/LoginContext";
import { Container, Navbar, Nav, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = memo(() => {
    const { cart } = useContext(DataContext);

    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    const handleNavigate = () => {
        if (user.auth === true) {
            navigate("/feature", { replace: true });
        }
    };

    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand className="me-5 d-sm-none d-md-none d-lg-block navbar-brand-top fw-bold">
                    <Link to="/" className="nav-link">
                        <i class="fa-solid fa-house"></i> E-Commerce
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link me-3">
                            Home
                        </Link>

                        <Link to="shop" className="nav-link me-3">
                            Shop
                        </Link>

                        <Link to="feature" className="nav-link me-3">
                            Feature
                        </Link>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Brand className="d-sm-block d-md-block d-lg-none fw-bold">
                    <Link to="/" className="nav-link">
                        <i class="fa-solid fa-house"></i> E-Commerce
                    </Link>
                </Navbar.Brand>

                <Navbar.Brand className="d-flex gap-5">
                    <Link className="nav-link position-relative" onClick={handleNavigate}>
                        <Badge
                            bg="primary"
                            style={{ width: "25px", height: "16px" }}
                            className="d-flex justify-content-center align-items-center position-absolute top-0 start-100 translate-middle rounded-pill"
                        >
                            {cart.total_items}
                        </Badge>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </Link>

                    <Link to="login" className="nav-link">
                        <i className="fa-solid fa-user"></i>
                    </Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
});

export default Header;
