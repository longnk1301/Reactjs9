import { useState } from "react";
import { Card, Container, Button, Row, Col, Form, InputGroup, ButtonToolbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const [validated, setValidated] = useState(false);

    const [shippingCountries, setShippingCountries] = useState([]);

    const [shippingCountry, setShippingCountry] = useState("");

    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);

    const [shippingSubdivision, setShippingSubdivision] = useState("");

    const [shippingOptions, setShippingOptions] = useState([]);

    const [shippingOption, setShippingOption] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container className="mt-5 pt-5 d-flex justify-content-center align-items-center">
            <Card className="w-75 p-4 shadow rounded">
                <Card.Title className="text-center fw-bold mb-4">Shipping Address</Card.Title>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control required type="text" placeholder="First Name" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control required type="text" placeholder="Last Name" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustomUsername" className="mt-4">
                            <Form.Label>Address</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    placeholder="Address"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Please choose a Address.</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustomUsername" className="mt-4">
                            <Form.Label>Email</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Please choose a Email.</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>

                    <Row className="mb-4">
                        <Form.Group as={Col} md="6" controlId="validationCustom03" className="mt-2">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom05" className="mt-2">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Phone Number" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Phone Number.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-4">
                        <Form.Group as={Col} md="6" controlId="formGridState" className="mb-4">
                            <Form.Label>Shipping Country</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Japan</option>
                                <option>France</option>
                                <option>Germany</option>
                                <option>Denmark</option>
                                <option>Korea</option>
                                <option>VietNam</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="formGridState">
                            <Form.Label>Shipping Subdivision</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Japan</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="formGridState">
                            <Form.Label>Shipping Options</Form.Label>
                            <Form.Select defaultValue="Choose..."></Form.Select>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-4">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <ButtonToolbar className="justify-content-between">
                        <Button onClick={() => navigate("/feature", { replace: true })}>Back To Cart</Button>

                        <Button type="submit">Next</Button>
                    </ButtonToolbar>
                </Form>
            </Card>
        </Container>
    );
};

export default Payment;
