import { Card, Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        if (data) {
            localStorage.setItem("data", JSON.stringify(data));

            navigate("/login", { replace: true });
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center mt-5">
            <Card className="p-5 mt-5 d-flex flex-row shadow justify-content-center align-items-center">
                <div>
                    <h1 className="mb-4 text-center fw-bold">Sign Up</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-4">
                            <Form.Control
                                type="text"
                                placeholder="Your Name"
                                {...register("name", { required: true, maxLength: 20 })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Control type="email" placeholder="Your Email" {...register("email")} />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Control type="password" placeholder="Password" {...register("password")} />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Check type="checkbox" label="I agree all statements in Terms of service" />
                        </Form.Group>

                        <Form.Group className="text-center">
                            <Button type="submit" className="w-100 fw-bold">
                                Register
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </Card>
        </Container>
    );
};

export default Signup;
