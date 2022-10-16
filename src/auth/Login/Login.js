import { Button, Card, Container, Figure, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";

import loginLogo from "../../assets/image/login.jpg";
import { UserContext } from "../../context/LoginContext";

const Login = () => {
    const { register, handleSubmit } = useForm();

    const { login } = useContext(UserContext);

    const navigate = useNavigate();

    const onSubmit = (data) => {
        const dataRegister = JSON.parse(localStorage.getItem("data"));

        if (data.name === dataRegister.name && data.password === dataRegister.password) {
            navigate("/feature", { replace: true });
        }

        login(data);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center mt-5">
            <Card className=" shadow mt-5 p-5 d-flex flex-row justify-content-between">
                <div>
                    <Figure>
                        <Figure.Image width={200} height={150} alt="171x180" src={loginLogo} />
                    </Figure>
                </div>

                <div>
                    <h1 className="mb-4 text-center fw-bold">Login</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-4">
                            <Form.Control type="text" placeholder="Your Name" {...register("name")} />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Control type="password" placeholder="Password" {...register("password")} />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>

                        <Form.Group className="text-center">
                            <Button type="submit" className="w-100 fw-bold">
                                Log In
                            </Button>
                        </Form.Group>

                        <NavLink to="/signup" className="nav-link mt-4">
                            Create an account
                        </NavLink>
                    </Form>
                </div>
            </Card>
        </Container>
    );
};

export default Login;
